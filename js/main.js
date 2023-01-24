/* detectar el ancho de la imagen en diamante y poner el mismo valor en height */

var dn_width = $('.diamante').width();
$(".diamante").css({
    height: dn_width -40
})

var dn_width = $('.grid-item').width();
$(".grid-item").css({
    height: dn_width -40
})
console.log(dn_width);


/* agregar scroll a la barra de navegacion */
var nav = document.querySelector('nav');
window.addEventListener('scroll',function (){
    if(window.pageYOffset > 500){
        nav.classList.add("nav_overlay");
    }else{
        nav.classList.remove("nav_overlay");
    }
});


    