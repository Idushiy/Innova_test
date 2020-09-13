jQuery(document).ready(function($) {


});

/*
//likes
var likes = 0;
var num = document.getElementById('numero');

function counter() {
    likes++;
    num.innerHTML = likes;
}*/



//change-color-hearts
$('.fa-heart').click(function () {
    this.classList.toggle('far');
    this.classList.toggle('fa');
});