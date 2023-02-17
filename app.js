$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.box-menu').addClass("scrollMenu")
        }else{
            $('.box-menu').removeClass("scrollMenu")
        }
    });
});