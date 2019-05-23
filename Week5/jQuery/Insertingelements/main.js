$(function () {

});


$('body').prepend('<div></div>');
var gallery = $('div');
gallery.addClass('box');
gallery.prepend('<span> </span>');
var span = $('div span');
span.addClass('first');
$('.first').css({
    'display': 'block',
    'width': '350px',
    'height': '350px',
    'background-color': 'red'
});



// gallery.append('<span></span>');
// var span = $('div span');
// span.addClass('green');
// $('.second').css({
//     'position': 'absolute',
//     'display': 'block',
//     'width': '100px',
//     'height': '100px',
//     'background-color': 'green'
// });