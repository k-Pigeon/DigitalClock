$(document).ready(function () {
    setInterval(function () {
        var $day_Classification;

        var $timeInfo = new Date();//날짜&시간을 가져올 변수

        var $yearTime = $timeInfo.getFullYear();//연
        var $monthTime = $timeInfo.getMonth() + 1;//월
        var $dayTime = $timeInfo.getDate();//일

        var $hourTime = $timeInfo.getHours();//시
        var $minuteTime = $timeInfo.getMinutes();//분
        var $secTime = $timeInfo.getSeconds();//초

        //초가 1자리 수일 때 앞에 0을 붙이는 조건식
        if(parseInt($secTime) < 10){
            $secTime = "0" + $secTime;
        }

        //오전/오후 구분
        if(parseInt($hourTime) < 13){
            $day_Classification = "오전 ";
        }else{
            $day_Classification = "오후 ";
        }

        $("#time").text($day_Classification + $hourTime +  " : " + $minuteTime +  " : " + $secTime);
        $("#date").text($yearTime +  "년 " + $monthTime +  "월 " + $dayTime + "일");
    });
});