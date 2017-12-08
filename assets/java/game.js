


var count = 90;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    $("#timer").html(count);
    if (count <= 0) {
        clearInterval(counter);
        //counter ended, do something here
        alert("Time's Up!");
        $("quiz").hide();
        check();
    }

    //Do code for showing the number of seconds here
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

    if (question1 == "To be big") {
        correct++;

    } else {
        incorrect++;
    }

    if (question2 == "Zoltar") {
        correct++;
    } else {
        incorrect++;
    }


    if (question3 == "MacMillan Toy Company") {
        correct++;

    } else {
        incorrect++;
    }

    if (question4 == "Chopsticks") {
        correct++;
    } else {
        incorrect++;
    }


    if (question5 == "Jump on a trampoline") {
        correct++;

    } else {
        incorrect++;
    }

    if (question6 == "An electronic comic book") {
        correct++;

    } else {
        incorrect++;
    }

    if (question7 == "He found a Zoltar machine and made a wish to be little again") {
        correct++;

    } else {
        incorrect++;
    }

    if (question8 == "His girlfriend, Susan Lawrence") {
        correct++;

    } else {
        incorrect++;
    }



    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("correct").innerHTML = "Great job! You got  " + correct + " questions correct!";
    document.getElementById("incorrect").innerHTML = "Uh oh! You got " + incorrect + " questions incorrect.";
}