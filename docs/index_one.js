var words = 'こんにちは！！！';

function set2fig(num){
    if(num<10){
        num='0'+num;
    }
    return num;
}

function getDayWeek(num){
    var nowDay;
    switch(num){
        case 0:
            nowDay = '(日)';
            break;
        case 1:
            nowDay = '(月)';
            break;
        case 2:
            nowDay = '(火)';
            break;
        case 3:
            nowDay = '(水)';
            break;
        case 4:
            nowDay = '(木)';
            break;
        case 5:
            nowDay = '(金)';
            break;
        case 6:
            nowDay = '(土)';
            break;
    }
    return nowDay;
}
function getClock(){
    var nowTime = new Date();
    var nowYear = nowTime.getFullYear();
    var nowMonth = set2fig(nowTime.getMonth()+1);
    var nowDate = set2fig(nowTime.getDate());
    var nowHour = set2fig(nowTime.getHours());
    var nowMin = set2fig(nowTime.getMinutes());
    var nowSec = set2fig(nowTime.getSeconds());
    
    var nowDay = getDayWeek(nowTime.getDay());
    
    var nowClock = '現在時刻は：' + nowYear + '/' + nowMonth + '/' + nowDate + nowDay +' '+nowHour+':'+nowMin+':'+nowSec;
    document.getElementById("RealTimeDisp").innerHTML = nowClock;
}
setInterval('getClock()',1000)

//document.write(words);
