var boss = 112;

$("#number").text(boss);

var counter = 0;

var smashAttack = [5, 10, 4, 6];

for (var i = 0; i < smashAttack.length; i++) {
    var image1 = $("kong");
    var image2 = $("kirby");
    var image3 = $("link");
    var image4 = $("mario");

    image1.addclass("kong-image")
    image2.addclass("kirby-image")
    image3.addclass("link-image")
    image4.addclass("mario-image")

    image1.attr("<img src ="https://www.ssbwiki.com/images/thumb/b/b5/SuperMarioParty_DonkeyKong.png/350px-SuperMarioParty_DonkeyKong.png");
    image2.attr("<img src="https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/250px-Kirby_SSBU.png");
    image3.attr("<img src="https://www.ssbwiki.com/images/thumb/3/32/Link_SSB4.png/250px-Link_SSB4.png");
    image4.attr("<img src="https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/250px-Mario_SSBU.png");

    image1.attr("data-kongAttack", smashAttack[i]);
    console.log (image1);

    $("#image1").append(kong);

    $("kong-image").on("click", function () {
        var kongAttack = ($(this).attr("dta-kongAttac"));
        kongAttack = parseInt(kongAttack);

        counter += kongAttack;
        alert("New score: " + counter);

        if (counter === boss) {
            alert("COMPLETE");
        }

        else if (counter >= boss) {
            alert("GAME OVER");
        }

    });
}