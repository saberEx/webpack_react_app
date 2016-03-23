"use strict";
(function() {
    var i_interval = null;
    var i_curTime = 0;
    var timing = {
        start:function(i_totalTime,f_callBack,i_intervalTime){
            i_intervalTime = i_intervalTime || 1;
            i_intervalTime = i_intervalTime * 1000;
            i_totalTime = i_totalTime || 0;
            i_totalTime = i_totalTime * 1000;
            i_curTime = 0;
            f_callBack((i_totalTime - i_curTime)/1000);
            i_interval = window.setInterval(function(){
                i_curTime += i_intervalTime;
                if(i_totalTime >= i_curTime){
                    f_callBack((i_totalTime - i_curTime)/1000);
                }else{
                    if(i_interval){
                        window.clearInterval(i_interval);
                    }
                }
            },i_intervalTime);
        },
        stop:function(f_callBack){
            if(i_interval){
                window.clearInterval(i_interval);
            }
            if(f_callBack){
                f_callBack();
            }
        }
    };

    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function(){
            return timing;
        });
    } else if(typeof module !== 'undefined' && module.exports){
        module.exports = timing;
    } else{
        window.Timing = timing;
    }
}());
