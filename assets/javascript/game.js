$(document).ready(function () {
    var boss = Math.floor(Math.random() * 100 + 20);

    $("#number").text(boss);

    var win = 0;
    var loss = 0;

    var imageB = $("#bowser");

    var counter = 0;
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

        if (counter === boss) {
            win++;
            $("#win").text(win);
            return
        }

        else if (counter >= boss) {
            loss++;
            $("#loss").text(loss);
            return
        }
    })

});
