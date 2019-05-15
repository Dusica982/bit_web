function change() {
    var secondList = document.getElementById("listtwo");
    var changeItems = secondList.getElementsByTagName("li");

    //changeItems.className = "color1";

    for (var i = 0; i < changeItems.length; i++) {
        changeItems[i].className = "colorblue";
    }

}
change();

function changeBig() {
    var listfirst = document.getElementById("firstlist");
    var changeLi = listfirst.getElementsByTagName("li");

    for (var i = 0; i < changeLi.length; i++) {
        changeLi[i].className = "colorblueandtext";
    }

}

changeBig();
