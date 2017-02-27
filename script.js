$(document).ready(function(){
var c2cEducators = ["Matt", "Trey", "Sam", "Samuel"];
var c2cStudents = ["Adrian", "Richard", "Tim", "Jorge", "Garrett", "Evila", "Eyesac", "Alexis", "Corey", "Basil", "Kaci", "Spencer"];

$("#studentButton").click(function() {
    $("#studentDisplay").append(c2cStudents[Math.floor(Math.random()*(c2cStudents.length))] + ", please answer the question."); 
});
$("#teacherButton").click(function() {
    $("#teacherDisplay").append(c2cEducators[Math.floor(Math.random()*(c2cEducators.length))] + ", please help :("); 
});
});
