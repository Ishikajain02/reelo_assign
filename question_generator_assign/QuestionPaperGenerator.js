class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      const questionPaper = [];
      const totalQuestions = Math.ceil((totalMarks * 0.01) * 100); // 1% of total marks
  
      for (const [difficulty, percentage] of Object.entries(difficultyDistribution)) {
        const questionsForDifficulty = this.questionStore.getQuestionsByDifficulty(difficulty);
        const numberOfQuestions = Math.ceil((percentage * 0.01) * totalQuestions);
  
        questionPaper.push(...questionsForDifficulty.slice(0, numberOfQuestions));
      }
  
      return questionPaper;
    }
  }
  
  module.exports = QuestionPaperGenerator;
  