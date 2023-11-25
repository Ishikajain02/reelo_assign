const QuestionStore = require('./QuestionStore');
const QuestionPaperGenerator = require('./QuestionPaperGenerator');

// Sample data
const questions = [
  { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
  {question: "what is Life",subject: "Psychology",topic: "life" , difficulty: "Medium",marks:30},
  {question: "what are Life",subject: "Psychology",topic: "life" , difficulty: "easy",marks:30},
  {question: "what so Life",subject: "Psychology",topic: "life" , difficulty: "hard",marks:30}
  // Add more sample questions as needed
];

const questionStore = new QuestionStore(questions);
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Example distribution for a question paper
const difficultyDistribution = { Easy: 20, Medium: 50, Hard: 30 };

// Generate a question paper with a total of 100 marks
const questionPaper = questionPaperGenerator.generateQuestionPaper(100, difficultyDistribution);

// Display the generated question paper
console.log(questionPaper);
