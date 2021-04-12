<?php
session_start();
if (isset($_SESSION['userId'])) {
?>
    <div id="power_btn" class="material-icons header" style="border:1px solid darkcyan; color:darkcyan;" OnClick="javascript:logout()"> power_settings_new </div>
<?php
} else {
?>
    <div id="power_btn" class="material-icons header" style="border:1px solid red; color:red;" OnClick="javascript:login()"> power_settings_new </div>
<?php
}
?>

<script>
    function login() {
        var body = document.getElementsByTagName('body');
            body[0].style.overflow = 'hidden';

            var cover = document.createElement('div');
            cover.id = "signup_cover";    
            cover.addEventListener('click', function(){
                cover.parentNode.removeChild(cover);
                body[0].style.overflow = 'visible';
            });
            body[0].appendChild(cover);
            $("#signup_cover").load("login.html");
    }
    function logout() {
        const data = confirm("로그아웃 하시겠습니까?");
            if (data) {
                location.href = "logoutPrcoess.php";
            }
    }
</script>