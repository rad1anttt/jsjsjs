//153(Пример)
/*
for (var i = 0; i < 5; i++) {
    $("h1").slideUp(1000);
    $("h1").slideDown(1000);
}
*/

//1
/*
$("h1").text("Мои друзья");
var friends = ["Kirill", "David", "Danil"]
for (var i = 0; i < 3; i++) {
 $("body").append("<p>" + friends[i] + "</p>");
 $("p").last().hide().fadeIn((i+1) *1000);
}
$("p").append(" лучший!");
*/

//2
/*
for (var i = 0; i < 5; i++){
    $("h1").fadeOut(1000).fadeIn(1000);
    $("h1").fadeOut(2000).fadeIn(2000);
    $("h1").fadeOut(3000).fadeIn(3000);
    $("h1").fadeOut(4000).fadeIn(4000);
    $("h1").fadeOut(5000).fadeIn(5000);
}
*/

//155(4)
/*
$("h1").fadeTo(2000, 0.1);
*/

//160
/*
var leftOffset = 0;

var moveHeading = function() {
    $("h1").offset({left: leftOffset });

    leftOffset++;

    if(leftOffset > 200) {
        leftOffset = 0;
    }
};
setInterval(moveHeading, 0);
*/

//162
/*
var clickHandler = function(event) {
    document.write("Клик! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);
*/

//163(1)
/*
$("html").mousemove(function(event) {
    $("h1").offset({
        left: event.pageX,
        top: event.pageY
    });
});
*/

//165(4)
