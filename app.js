function talk(){
var know = {
"Who are you" : "Hello, Harsh here",
"How are you" : "Good :)",
"ok" : "Thank You So Much ",
"Bye" : "Okay! Will meet soon.."
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "Antagligen Glenn <br>";
}
}