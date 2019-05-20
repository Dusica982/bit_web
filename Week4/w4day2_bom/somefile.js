// (function () {
//     console.log(window.navigator.platform);
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.userAgent);


// })();


// (function () {
//     if (window.navigator.onLine) {
//         console.log("We are online");
//     } else {
//         console.log("We are not online");
//     }
// }
// )();



// (function () {

//     window.navigator.onLine ? console.log("We are online") : console.log("We are not online");

// }
// )();

// (function () {

//     console.log(window.screen.availHeight);
//     console.log(window.screen.availWidth);
//     console.log(window.screen.height);
//     console.log(window.screen.width);
// }
// )();

// (function () {
//     console.log(window.location.href);
//     console.log(window.location.host);
//     console.log(window.location.protocol);
//     console.log(window.location.search);

// })();


// (function () {
//     window.location.href = "https://www.b92.net/";


// })();

// (function () {
//     window.location.reload;


// })();



// (function () {

//     localStorage.setItem("najnovije", "vesti");
// }
// )();



// (function () {
//     var data = localStorage.getItem("najnovije");

//     if (data.length) {
//         console.log(data);
//     } else {
//         console.log("There is no data");
//     }
// }
// )();

// (function () {

//     localStorage.clear();
// }
// )();


var win = window.open('https://www.b92.net/');
setTimeout(function () {
    win.close()

}, 2000);