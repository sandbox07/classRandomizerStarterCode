$(document).ready(function(){
var c2cEducators = ["Matt", "Trey", "Sam", "Samuel"];
var c2cStudents = ["Adrian", "Richard", "Tim", "Jorge", "Garrett", "Evila", "Eyesac", "Alexis", "Corey", "Basil", "Kaci", "Spencer"];

$("#studentButton").click(function() {
    $("#studentDisplay").text(c2cStudents[Math.floor(Math.random()*(c2cStudents.length))] + ", please answer the question."); 
});
$("#teacherButton").click(function() {
    $("#teacherDisplay").text(c2cEducators[Math.floor(Math.random()*(c2cEducators.length))] + ", please help :("); 
});
$("#add").click(function() {
   var newStudent = $("#student").val();
   c2cStudents.push(newStudent);
   if(newStudent.length() > 1){
   $("#addedDisplay").text(newStudent + " has been added to your class.");
   }
});
$("#addT").click(function() {
   var newTeacher = $("#teacher").val();
   c2cEducators.push(newTeacher);
   if(newTeacher.length() > 1){
   $("#addedTeachDisplay").text(newTeacher + " has been added as a teacher.");
   }
});
});