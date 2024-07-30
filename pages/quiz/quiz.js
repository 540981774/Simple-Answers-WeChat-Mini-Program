Page({
  data: {
    questions: [
      {
        question: "以下哪一项是 JavaScript 的数据类型？",
        options: ["String", "Float", "Double", "Char"],
        answer: "String"
      },
      {
        question: "HTML 的全称是什么？",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Marking Language"],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "CSS 用于什么？",
        options: ["Adding behavior to elements", "Styling web pages", "Structuring the document", "None of the above"],
        answer: "Styling web pages"
      }
    ],
    currentQuestionIndex: 0,
    score: 0
  },

  onLoad: function() {
    this.setData({
      currentQuestion: this.data.questions[this.data.currentQuestionIndex]
    });
  },

  chooseOption: function(e) {
    const chosenOption = e.currentTarget.dataset.option;
    const currentQuestion = this.data.currentQuestion;
    let score = this.data.score;

    if (chosenOption === currentQuestion.answer) {
      score++;
    }

    this.setData({
      score,
      currentQuestionIndex: this.data.currentQuestionIndex + 1
    });

    if (this.data.currentQuestionIndex < this.data.questions.length) {
      this.setData({
        currentQuestion: this.data.questions[this.data.currentQuestionIndex]
      });
    } else {
      getApp().globalData.score = score;
      wx.navigateTo({
        url: '/pages/result/result'
      });
    }
  }
});
