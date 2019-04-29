// components/calendar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: 0,
    today: [0, 0, 0],
    days: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    //  根据年月计算日历应该显示的日期
    getMonthDay: function(y, m) {
      var arr = [];
      var is_leap = 0;
      if(y%100==0){
          if(y%400==0){
            is_leap = 1;
          }
      }else{
        if (y % 4 == 0) {
          is_leap = 1;
        }
      }
      // 每一个月该有的天数
      var month_count = [31,28+is_leap,31,30,31,30,31,31,30,31,30,31];
      // 当前月1号星期几
      var first_day = new Date(y+"-"+(m+1)+"-1").getDay();
      
      // 上一个月的天数
      var prev_month_day_count = first_day==0?7:first_day;
      // 上一个月的日期
      var month = (m - 1 + 12) % 12;
      var year = m == 0 ? (y - 1) : y;

      for (var i = 1; i <= prev_month_day_count; i++) {
        var day = month_count[month] - prev_month_day_count + i ;
        arr.push({
          year: year,
          month: month,
          day: day,
          current:false
        });
      }

      // 当前月的天数
      var current_month_day_count = month_count[m];
     
      // 当前月的日期
      for (var i = 1; i <= current_month_day_count;i++){
        arr.push({
          year: y,
          month: month,
          day: i,
          current:true
        });
      }
      // 下一个月的天数
      var next_month_day_count = 42 - prev_month_day_count - current_month_day_count;
      var month = (m + 1) % 12;
      var year = m==11?(y+1):y;
      // 下一个月的日期
      for (var i = 1; i <= next_month_day_count; i++) {
        arr.push({
          year: year,
          month: month,
          day: i,
          current:false
        });
      }
      return arr;
    },
    // 上一个月
    prevMonth() {
      var prevMonth = (this.data.month-1+12)%12;
      var year = (this.data.month == 0 ? (this.data.year - 1) : this.data.year);
       var arr = this.getMonthDay(this.data.year, prevMonth);
       this.setData({
         year: year,
         month: prevMonth,
         days:arr
       })
    },
    // 下一个月
    nextMonth(){
      var nextvMonth = (this.data.month  + 1) % 12;
      var year = this.data.month == 11 ? this.data.year + 1 : this.data.year;
      var arr = this.getMonthDay(year, nextvMonth);
      this.setData({
        year: year,
        month: nextvMonth,
        days: arr
      })
    },
  },
  lifetimes: {
    attached() {
      // 获取今天的年月日
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var arr = this.getMonthDay(year, month);
      // 更新data让显示当前的日历
      this.setData({
        year: year,
        month: month,
        today: [year, month, day],
        days:arr
      });
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})