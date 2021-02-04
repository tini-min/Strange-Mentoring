var btn = document.getElementById('power_btn');
btn.addEventListener('click', function(){
    var body = document.getElementsByTagName('body');
    var cover = document.createElement('div');
    var origin_body = body[0].innerHTML;

    var signup_box = document.createElement('div');
    signup_box.id = "signup_box";
    let logos = ['kakao', 'facebook', 'naver', 'google', 'main'];
    let ko_logos = ['카카오', '페이스북', '네이버', '구글', '수상한 공모전'];

    var ul = document.createElement('ul');
    for (var i =0; i < 5; i++) {
        var hyper = document.createElement('a');
        var signup = document.createElement('li');
        signup.className = "signup";
        signup.id = logos[i];

        signup.innerHTML = '<img src = "./img/' + logos[i] + '.png">';
        signup.innerHTML += '<span>' + ko_logos[i] + ' 계정으로 로그인</span>';

        if (i == 4) { hyper.href = "signup.html" }

        hyper.appendChild(signup);
        ul.appendChild(hyper);
    }
    signup_box.appendChild(ul);

    body[0].style.overflow = 'hidden';
    cover.id = "signup_cover"
    cover.appendChild(signup_box);
    cover.addEventListener('click', function(){
        cover.parentNode.removeChild(cover);
        body[0].style.overflow = 'visible';
    });

    body[0].appendChild(cover);
    console.log('hi');
})