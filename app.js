import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, onChildAdded, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


var firebaseConfig = {
    apiKey: "AIzaSyDNr8X7SGA91GJdcaKEejaZbf6eZc6nLks",
    authDomain: "quiz-app-ab776.firebaseapp.com",
    databaseURL: "https://quiz-app-ab776-default-rtdb.firebaseio.com",
    projectId: "quiz-app-ab776",
    storageBucket: "quiz-app-ab776.appspot.com",
    messagingSenderId: "1005691220649",
    appId: "1:1005691220649:web:959de9005c5631c55aefb8",
    measurementId: "G-MEBTBZVYVQ"
};

var app = initializeApp(firebaseConfig);
var database = getDatabase(app);

function getDataFromDatabase() {
    var reference = ref(database, 'question/');
    onChildAdded(reference, function (data) {
        console.log(data.val());
        questions.push(data.val());
        renderQuestion()

    })
}

getDataFromDatabase()


var questions = [

];

var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');
var question = document.getElementById('question');
var answerParent = document.getElementById('answerParent');

var indexNum = 0
var score = 0

window.checkQuestion = function (a, b) {
    if (a == b) {
        score++;
        console.log(score);
    }
    nextQuestion();
}

window.nextQuestion = function () {
    if (indexNum + 1 == questions.length) {
        alert("your score is " + score)

    } else {
        indexNum++;
        renderQuestion();
    }

}


function renderQuestion() {

    currentQuestion.innerHTML = indexNum + 1
    totalQuestion.innerHTML = questions.length
    var obj = questions[indexNum]
    question.innerHTML = questions[indexNum].question
    answerParent.innerHTML = "";
    // currentQuestion.innerHTML = "";
    for (var i = 1; i < obj.options.length; i++) {
        answerParent.innerHTML += `<div class="col-md-4">
    <div class="py-2">
        <button onclick = "checkQuestion('${obj.options[i]}','${obj.correctAnswer}')"  class="btn btn-dark fs-3 rounded-pill w-100">${obj.options[i]}</button>
    </div>
</div>`
    }


}
renderQuestion()





