let sec=document.getElementById("about");



let aboutOfset= $('#about').offset().top;
    $(window).scroll(function(){
    let windowScrol= $(window).scrollTop();
    if(windowScrol>aboutOfset-50){
        $('.navbar').css('background','rgba(0,0,0,0.7)')
    }else{
        $('.navbar').css('background','transparent')
    }
})

window.onscroll = function(){
    if(window.scrollY >= sec.offsetTop -100){
        $('.skillt').animate({ width:"96%"},1000)
        $('.skillt2').animate({ width:"92%"},1000)
        $('.skillt3').animate({ width:"65%"},1000)
        $('.skillt4').animate({ width:"72%"},1000)
    }
}
AOS.init();

