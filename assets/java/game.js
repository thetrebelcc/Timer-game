


var count = 90;

var counter = setInterval(timer, 1000); 

function timer() {
    count = count - 1;
    $("#timer").html(count);
    if (count <= 0) {
        clearInterval(counter);
        alert("Time's Up!");
        $("quiz").hide();
        check();
    }

    
}

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;

    var correct = 0;
    var incorrect = 0;

    if (question1 == "Mark Coleman") {
        correct++;

    } else {
        incorrect++;
    }

    if (question2 == "1993") {
        correct++;
    } else {
        incorrect++;
    }


    if (question3 == "Chan Sung Jung") {
        correct++;

    } else {
        incorrect++;
    }

    if (question4 == "Conor Mcgregor") {
        correct++;
    } else {
        incorrect++;
    }


    if (question5 == "Carla Esparza") {
        correct++;

    } else {
        incorrect++;
    }

    



    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("correct").innerHTML = " You got  " + correct + " questions correct!";
    document.getElementById("incorrect").innerHTML = " You got " + incorrect + " questions incorrect.";
}