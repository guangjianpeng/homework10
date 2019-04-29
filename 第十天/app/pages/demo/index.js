// app/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bgc:'yellow',
      msg:"Hello mp",
      arr:['张三','李四','王五','赵六'],
      score:60,
     className:'big',
     book1:{name:'西游记',author:'吴承恩',price:12.56}
  },
  tapHandler(e){
    // e 事件对象
    console.log(e);

    // 只能通过setData修改data中的数据
     this.setData({
        bgc:'green'
     });
  },

  selectArr(e){
    console.log(e.target.dataset);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})