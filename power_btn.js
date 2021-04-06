var btn = document.getElementById('power_btn');
btn.addEventListener('click', function(){
    var body = document.getElementsByTagName('body');
    body[0].style.overflow = 'hidden';

    var cover = document.createElement('div');
    cover.id = "signup_cover";    
    console.log(cover.innerHTML + " Here");
    cover.addEventListener('click', function(){
        cover.parentNode.removeChild(cover);
        body[0].style.overflow = 'visible';
    });
    body[0].appendChild(cover);
    $("#signup_cover").load("login.html");
    console.log('hi');
})