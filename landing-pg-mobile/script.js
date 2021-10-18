function changeimg(){
    var check = document.getElementById("check").checked
    if (check == false){
        document.getElementById("imgId").src = "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
    }else{
        document.getElementById("imgId").src = "https://www.pinclipart.com/picdir/big/181-1812493_menu-white-menu-button-png-clipart.png" 
    }
};