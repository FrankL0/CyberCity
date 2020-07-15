var w = document.getElementsByClassName('section')[0],
    a = document.getElementsByClassName('section')[1],
    c = document.getElementsByClassName('section')[2];

// $('.section')[0].onclick(function(){
//     $('.slide').addClass('active');
// })

function slideright() {
    for (i = 0; i < 3; i++) {
        $(".slide").addClass("active1");
        $(".slide_item").addClass("active2")
    }
}

$(".slide_overlay").click(function () {
    $(".slide").removeClass("active1");
    $(".slide_item").removeClass("active2")
});