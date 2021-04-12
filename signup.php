<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <meta name="Author" content="tini-min">
    <meta name="Description" content="A service that provides mentors 
    who can teach from an early stage for those who are starting the competition 
    for the first time (matching with former winners who have practical and realistic information). 
    In addition, a service that solves the difficulties of team building 
    in the case of a team participation competition">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js" integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD" crossorigin="anonymous"></script>
</head>

<body>
    <form action="signupProcess.php" method="POST" id="signup-form">
        <div class="w-50 ml-auto mr-auto mt-5">
        <div class="mb-3 ">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="E-mail을 입력해 주세요.">
            </div>
            <div class="mb-3 ">
                <label for="password" class="form-label">비밀번호</label>
                <input name="password" type="password" class="form-control" id="password" placeholder="비밀번호를 입력해 주세요.">
            </div>
            <div class="mb-3 ">
                <label for="passwordCheck" class="form-label">비밀번호 확인</label>
                <input type="password" class="form-control" id="password-check" placeholder="비밀번호를 입력해 주세요.">
            </div>

            <button type="button" id="signup-button" class="btn btn-primary mb-3">회원가입</button>
        </div>
    </form>
    <script>
        console.log("0");
        const signupForm = document.querySelector("#signup-form");
        console.log("1");
        const signupButton = document.querySelector("#signup-button");
        const password = document.querySelector("#password");
        const passwordCheck = document.querySelector("#password-check");
        signupButton.addEventListener("click", function(event) {
            event.stopPropagation();
            if(password.value && password.value === passwordCheck.value){
            signupForm.submit();
            }else{
                alert("비밀번호가 서로 일치하지 않습니다");
            }
        });
    </script>
</body>

</html>