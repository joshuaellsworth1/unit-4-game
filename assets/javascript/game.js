var image1 = $("<img>");
var image2 = $("<img>");
var image3 = $("<img>");
var image4 = $("<img>");

var boss = 112;

var numCount = 0;

$("#number").text(boss);

var counter = 0;

var smashAttack = [5, 10, 4, 6]

for (var i = 0; i < smashAttack.length; i++); {

    image1.attr("king-kong.jpg", smashAttack[i]);
    $("#image1").append(image1);
    image1.addclass("king-kong.jpg")
    image2.addclass("kirby.jpg")
    image3.addclass("link.jpg")
    image4.addclass("mario.jpg")
    $("king-kong.jpg").on("click", function () {
        var kongAttack = ($(this).attr("king-kong.jpg"));

        kongvalue = parseInt(kongAttack);
        counter += kongAttack;
        alert("New score: " + counter);

    if (counter === kongAttack) {
      alert("You win!");
    }

    else if (counter >= kongAttack) {
      alert("You lose!!");
    }

  });
    }
}