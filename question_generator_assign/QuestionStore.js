class QuestionStore {
    constructor(questions) {
      this.questions = questions || [];
    }
  
    getQuestionsByDifficulty(difficulty) {
      return this.questions.filter((question) => question.difficulty === difficulty);
    }
  
    // Add methods for getting questions by other attributes (subject, topic, etc.) if needed
  }
  
  module.exports = QuestionStore;
  