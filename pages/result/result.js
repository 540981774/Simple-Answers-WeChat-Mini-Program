Page({
  data: {
    totalScore: 0,
    wrongList: [],
    chooseValue: [],
    remark: ["好极了！你很棒棒哦", "哎哟不错哦", "别灰心，继续努力哦！"]
  },

  onLoad: function() {
    const app = getApp();
    this.setData({
      totalScore: app.globalData.score,
      wrongList: app.globalData.wrongList,
      chooseValue: app.globalData.chooseValue
    });
  },

  toView: function() {
    // 查看错题的逻辑
  },

  toIndex: function() {
    wx.switchTab({
      url: '/pages/quiz/quiz'
    });
  }
});
