function calculateArea(width,height) {
var area = width * height;
return area;
}
var wh = prompt("What is the width?");
var ht = prompt("What is the height?");
var wallOne = calculateArea(wh,ht);
window.alert(wallOne)
