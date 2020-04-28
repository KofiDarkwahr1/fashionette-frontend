

//open mobile menu
function openMenu(){
    document.querySelector(".nav-list").classList.add('active');
}

//close mobile menu
function closeMenu(){
    document.querySelector(".nav-list").classList.remove('active');
}

$(function(){

    //show price of product on hover
    $(".design").hover(function(){
        $(".design p").addClass("")
    });
});