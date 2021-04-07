var signup_box = document.getElementById("signup_box");

function makeLoginList(event) {
    if (event != null) event.stopPropagation();
    
    if (document.getElementById("login_btn_list")) signup_box.removeChild(document.getElementById("login_btn_list"));
    else if (document.getElementById("signupForm")) signup_box.removeChild(document.getElementById("signupForm"));

    var logos = ['kakao', 'facebook', 'naver', 'google', 'main'];
    var ko_logos = ['카카오', '페이스북', '네이버', '구글', '수상한 공모전'];
    var login_btn_list = document.createElement("ul");
    login_btn_list.id = "login_btn_list";

    for (var i =0; i < 5; i++) {
        var hyper = document.createElement('a');
        var signup = document.createElement('li');

        hyper.id = logos[i] + "_btn";
        signup.className = "signup";
        signup.id = logos[i];

        signup.innerHTML = '<img src = "./img/' + logos[i] + '.png">';
        signup.innerHTML += '<span>' + ko_logos[i] + ' 계정으로 로그인</span>';

        switch (i) {
            case 0 :
                hyper.href = "javascript:loginWithKakao()";
                break;
            case 1 :
                hyper.href = "#";
                break;
            case 2 :
                hyper.href = "#";
                break;
            case 3 :
                hyper.href = "#";
                break;
            case 4 :
                hyper.href = "signup.html";
                break;
            default :
                break;
        }
        
        hyper.appendChild(signup);
        login_btn_list.appendChild(hyper);
        signup_box.appendChild(login_btn_list);
    }
}
function makeSignupForm(event) {
    event.stopPropagation();

    if (document.getElementById("login_btn_list")) signup_box.removeChild(document.getElementById("login_btn_list"));
    else if (document.getElementById("signupForm")) signup_box.removeChild(document.getElementById("signupForm"));

    var signupForm = document.createElement("div");
    signupForm.id = "signupForm";
    var forms = document.createElement("div");
    forms.className = "forms";
    var myform = document.createElement("form");
    myform.name = "myform"; myform.method = "get"; myform.action="test.html";
    var emailLabel = document.createElement("label");
    emailLabel.for = "userEmail"; emailLabel.innerHTML = "E-mail";
    var userEmail = document.createElement("input");
    userEmail.type = "text"; userEmail.id = "userEmail"; userEmail.name = "userEmail"; userEmail.placeholder = "메일주소를 입력하세요.";
    
    myform.appendChild(emailLabel); myform.appendChild(userEmail);
    forms.appendChild(myform);
    signupForm.appendChild(forms);
    signup_box.appendChild(signupForm);
}