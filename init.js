var title = document.createElement('title');
title.innerHTML = "수상한 멘토링::팀빌딩부터 수상까지, AI와 함께!";
var kakaoAPI = document.createElement('script');
kakaoAPI.src = "https://developers.kakao.com/sdk/js/kakao.js";
var style = document.createElement('link');
style.rel = "stylesheet";
style.href = "style.css";
var googleIcons = document.createElement('link');
googleIcons.rel = "stylesheet";
googleIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";

document.head.prepend(title);
document.head.appendChild(kakaoAPI);
document.head.appendChild(style);
document.head.appendChild(googleIcons);

$(document).ready(function(){
    $("#header").load("basis.html .header", function(){
        var power_btn_func = document.createElement('script');
        power_btn_func.type = "text/javascript";
        power_btn_func.src = "power_btn.js";

        $(this).append(power_btn_func);
    });
    $("#nav").load("basis.html .nav");
});