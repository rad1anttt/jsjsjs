//153(Пример)
/*
for (var i = 0; i < 5; i++) {
    $("h1").slideUp(1000);
    $("h1").slideDown(1000);
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
$("html").click(function(event) {
    $("h1").offset({
        left: event.pageX,
        top: event.pageY
    });
});
*/

//165
/*
var direction = 'вправо';
var offset = 0;
var clicks = 0;
var intervalLength = 120;

$("h1").offset({left:offset, top:offset});

var moveHeading = function(){
    if (direction === 'вправо') {
        $("h1").offset({left:offset});
        offset++;
        if(offset > 200) {
            offset = 0;
            direction = 'вниз';
        }
    } else if (direction === 'вниз') {
        $("h1").offset({top: offset});
        offset++;
        if (offset > 200) {
            offset = 200;
            direction = 'влево';
        }
    } else if(direction === 'влево') {
        $("h1").offset({left:offset});
        offset--;
        if(offset < 0) {
            offset = 200;
            direction = 'вверх';
        }
    } else if (direction === 'вверх') {
        $("h1").offset({top:offset});
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'вправо';
        }
    }
};

var intervalId = setInterval(moveHeading, intervalLength);

$("h1").click(function() {
    clearInterval(intervalId);
    intervalLength /= 2;
    clicks++;

    if (clicks > 10) {
        $("h1").text("Вы победили");
    } else {
        intervalId = setInterval(moveHeading, intervalLength)
    }
});

setInterval(moveHeading, 30);
*/