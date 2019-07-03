
var win = 0;
var loss = 0;
var counter = 0;
var boss = 0;

function resetGame() {
    counter = 0;
    randomNum1 = 0;
    randomNum2 = 0;
    randomNum3 = 0;
    randomNum4 = 0;
    boss = 0;

    randomNum1 = Math.floor(Math.random() * 12 + 1);
    randomNum2 = Math.floor(Math.random() * 12 + 1);
    randomNum3 = Math.floor(Math.random() * 12 + 1);
    randomNum4 = Math.floor(Math.random() * 12 + 1);
    boss = Math.floor(Math.random() * 120 + 19);

    $("#number").text(boss);
    $("#group-attack").text(counter);


}

function gameCondition() {
    if (counter === boss) {
        win++;
        $("#win").text(win);
        resetGame();
    }

    else if (counter >= boss) {
        loss++;
        $("#loss").text(loss);
        resetGame();
    }
}


$(document).ready(function () {
    
    boss = Math.floor(Math.random() * 120 + 19);

    $("#number").text(boss);


    $("#group-attack").text(counter);
    var image1 = $("#kong");
    var image2 = $("#kirby");
    var image3 = $("#link");
    var image4 = $("#mario");

    var randomNum1 = Math.floor(Math.random() * 12 + 1);
    var randomNum2 = Math.floor(Math.random() * 12 + 1);
    var randomNum3 = Math.floor(Math.random() * 12 + 1);
    var randomNum4 = Math.floor(Math.random() * 12 + 1);

    image1.attr("group-attack", randomNum1);
    image2.attr("group-attack", randomNum2);
    image3.attr('group-attack', randomNum3);
    image4.attr("group-attack", randomNum4);

    $(".image").on("click", function () {
        var currentValue = parseInt(($(this).attr("group-attack")));
        counter += currentValue;
        $("#group-attack").text(counter);
        gameCondition()

    })

});
