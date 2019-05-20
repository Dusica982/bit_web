function change() {
    var a = document.getElementById("secondlist");
    var listitem = a.getElementsByTagName("li");

    listitem[0].className = "";
    // console.log(listitem[0]);

    var parel = a.parentElement;
    console.log(parel);

    var sibel = parel.previousElementSibling;
    console.log(sibel);

    var firlist = sibel.firstElementChild;                                                      //querySelector("#firstlist");
    console.log(firlist);

    var listItemFirst = firlist.getElementsByTagName("li");
    console.log(listItemFirst);

    listItemFirst[1].className = "active";




}
change();