(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["moment"], factory); // AMD
    } else if (typeof exports === "object") {
        module.exports = factory(require("moment")); // Node, CommonJS
    } else {
        factory(global.moment); // 브라우저 글로벌 변수
    }
}(this, function (moment) {
    return moment.defineLocale('ko', {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
            L: "YYYY.MM.DD",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h시 mm분",
            LLLL: "YYYY년 MMMM D일 dddd A h시 mm분"
        },
        meridiem: function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        },
        relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇초",
            ss: "%d초",
            m: "일분",
            mm: "%d분",
            h: "한시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한달",
            MM: "%d달",
            y: "일년",
            yy: "%d년"
        },
        ordinal: function (number) {
            return number + '일';
        },
    });
}));
