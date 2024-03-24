import React, { useState, useEffect } from 'react';

// 문제와 답변 타입 정의
type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number; // 정답의 인덱스
  score: number; // 이 문제의 점수
};

// 퀴즈 데이터 예시
const questions: Question[] = [

  {
    id: 1,
    question: "What ___________ your name?",
    options: ["is", "am", "are", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 2,
    question: "He has ___________ house in Paris.",
    options: ["any", "a", "an", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 3,
    question: "I work in a ___________. I’m a nurse.",
    options: ["hospital", "hotel", "supermarket", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 4,
    question: "This is my brother. ___________ name is Paul .",
    options: ["His", "Her", "He's", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 5,
    question: "___________ many people in the park.",
    options: ["They are", "There is", "There are", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 6,
    question: "I go to school  ___________ 7 o’clock in the morning.",
    options: ["for", "at", "in", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 7,
    question: "___________ Jack speak German?",
    options: ["Do", "Does", "He", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 8,
    question: "Are___________ your glasses?",
    options: ["this", "those", "that", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 9,
    question: "A: Where are your books?  B: They're ___________ the table.",
    options: ["at", "on", "in", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 10,
    question: "Do you want to ___________ TV at home?",
    options: ["see", "look", "watch", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 11,
    question: "I'd like to buy ___________ oranges for my mother.",
    options: ["some", "any", "a", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 12,
    question: "___________ ever seen a rainbow in your life?",
    options: ["Did you", "Are you", "Have you", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 13,
    question: "If you ___________ a book from a friend, you should return it as soon as possible.",
    options: ["borrow", "earn", "spend", "lend", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 14,
    question: "Taking care of a pet is as difficult ___________ taking care of a baby.",
    options: ["like", "so", "than", "as", "정확히 모르겠음"],
    answer: 3,
    score: 1,
  },
  {
    id: 15,
    question: "Helen isn't home. She ___________ an hour ago to see her friends.",
    options: ["went out", "had gone out", "has gone out", "has been out", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 16,
    question: "When I was a child, I ___________ play basketball with my dad in our backyard.",
    options: ["will", "used to", "have", "does", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 17,
    question: "Have you finished ___________ the laundry yet?",
    options: ["to do", "does", "doing", "being", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 18,
    question: "This is terrible. I've looked ___________, but I can't find my purse.",
    options: ["nowhere", "anywhere", "everywhere", "somewhere", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 19,
    question: "I ___________ in front of a bank when a man in a fancy suit got out of a black car.",
    options: ["stood", "was standing", "have stood", "am standing", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 20,
    question: "I've ___________ finished painting the door. It looks awesome!",
    options: ["still", "yet", "just", "only", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 21,
    question: "My supervisor encouraged me ___________ a plan for the new program.",
    options: ["set up", "setting up", "have set up", "to set up", "정확히 모르겠음"],
    answer: 3,
    score: 1,
  },
  {
    id: 22,
    question: "John ___________ living in this neighborhood since he was a school boy.",
    options: ["is", "was", "has been", "is being", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 23,
    question: "I was wondering ___________ I could borrow your pen.",
    options: ["what", "if", "that", "how", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 24,
    question: "I wish I had someone to look ___________.",
    options: ["up to", "with", "upon", "down", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 25,
    question: "That beautiful sunset ___________ me of my honeymoon in Hawaii.",
    options: ["remembers", "realizes", "recognizes", "reminds", "정확히 모르겠음"],
    answer: 3,
    score: 1,
  },
  {
    id: 26,
    question: "A: How about drinking beer tonight after work?  B: There's no ___________ I'm drinking again tonight.",
    options: ["hope", "way", "time", "opportunity", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 27,
    question: "They were surprised that the boy was kidnapped in ___________ daylight.",
    options: ["wide", "broad", "large", "open", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 28,
    question: "He turned ___________to be considerably older than I had imagined.",
    options: ["over", "up", "out", "round", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 29,
    question: "The windows in this house are in urgent ___________of replacement.",
    options: ["need", "help", "want", "demand", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 30,
    question: "Surveillance cameras ___________ proven to lower crime rates.",
    options: ["have to be", "were being", "have been", "are being", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 31,
    question: "Life is a ___________ deal easier for those who have many friends to rely on.",
    options: ["far", "huge", "big", "great", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 32,
    question: "This renovation project ___________ turning this house into a more comfortable place to live in.",
    options: ["contains", "designates", "involves", "consists", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 33,
    question: "They may not arrive in time for the ceremony. They’re ___________ in a traffic jam.",
    options: ["buried", "stuck", "blocked", "surrounded", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 34,
    question: "Rock music has been a major influence ___________other musical genres.",
    options: ["with", "to", "about", "on", "정확히 모르겠음"],
    answer: 3,
    score: 1,
  },
  {
    id: 35,
    question: "Maintaining a good relationship is important,___________ business you’re in.",
    options: ["however", "wherever", "whatever", "whenever", "정확히 모르겠음"],
    answer: 2,
    score: 1,
  },
  {
    id: 36,
    question: "It’s ___________unlikely that she will be designated as the head of the institute.",
    options: ["totally", "deeply", "strongly", "highly", "정확히 모르겠음"],
    answer: 3,
    score: 1,
  },
  {
    id: 37,
    question: "It’s no ___________ for me to go to your house and help your sister with her homework.",
    options: ["point", "wonder", "secret", "problem", "정확히 모르겠음"],
    answer: 3,
    score: 1,
  },
  {
    id: 38,
    question: "I was used to ___________ on the left side of the road because I’d lived in Japan for many years.",
    options: ["driving", "drive", "having driven", "drove", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },
  {
    id: 39,
    question: "Very rarely ___________here in March.",
    options: ["it snows", "does it snow", "is it snowing", "it has snowed", "정확히 모르겠음"],
    answer: 1,
    score: 1,
  },
  {
    id: 40,
    question: "The number of farmers on the island ___________ substantially over the last decade.",
    options: ["has declined", "was declined", "has been declined", "is declining", "정확히 모르겠음"],
    answer: 0,
    score: 1,
  },

];

const CefrTest: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const allQuestionsAnswered = selectedAnswers.every((answer) => answer !== null);
    if (allQuestionsAnswered) {
      // 모든 문제에 대한 답변이 완료되면 점수 확인 페이지로 이동
      // 여기서 점수 확인 페이지로 이동하는 로직을 구현하세요.
    }
  }, [selectedAnswers]);

  const handleAnswerSelection = (questionIndex: number, selectedAnswer: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = selectedAnswer;
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={question.id}>
          <h2>문제 {index + 1}: {question.question}</h2>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="radio"
                id={`option_${index}_${optionIndex}`}
                name={`option_${index}`}
                value={optionIndex}
                checked={selectedAnswers[index] === optionIndex}
                onChange={() => handleAnswerSelection(index, optionIndex)}
              />
              <label htmlFor={`option_${index}_${optionIndex}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CefrTest;