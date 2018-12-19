var questionNumber = 1;
var currentQuestion;
var intervalId;
var answerText;

var lossImgArray = ["assets/images/2-advanced.jpg", "img2src"];
var gameShow = {
    time: 24,
    questionsRight: 0,
    questionsWrong: 0,
    numberOfQuestions: 2,
    question1: {
        question: "This is question one.",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "4",
        choice1: "Sample choice one.",
        choice2: "Sample choice two.",
        choice3: "Sample choice three.",
        choice4: "The correct choice."
    },
    question2: {
        question: "This is question two.",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "2",
        choice1: "Sample choice one.",
        choice2: "The correct choice.",
        choice3: "Sample choice three.",
        choice4: "Sample choice two."
    },
    displayQuestion() {
        if (gameShow.numberOfQuestions === 0) {
            summary();
        } else {
            $("#answerCol").empty();
            gameShow.time = 24;
            $("#timerText").text(gameShow.time);
            gameShow.startTimer();
            //Sets current question and grabs text
            currentQuestion = gameShow["question" + questionNumber];
            var questionText = currentQuestion.question;
            $("#questionText").text(questionText);
            //Displays Answer Choices
            for (var i = 0; i < 4; i++) {
                var className = (i + 1).toString();
                var answerDiv = $("<div>").addClass(className).attr("value", className);
                answerDiv.addClass("btn d-block button");
                answerText = currentQuestion["choice" + (i + 1)];
                answerDiv.text(answerText);
                $("#answerCol").append(answerDiv);
            }
            questionNumber++;
            gameShow.numberOfQuestions--;
        }
    },
    startTimer() {
        intervalId = setInterval(gameShow.timer, 1000);
    },
    timer: function () {
        $("#timerText").text(gameShow.time);
        gameShow.time--;
        if (gameShow.time === (-1)) {
            $("#timerText, #questionText").text(" ");
            $("#answerCol").empty();
            clearInterval(intervalId);

            var lossImg = $("<img>").addClass("fluid-img thumbnail-img d-block mx-auto").attr("src", lossImgArray[questionNumber - 2]);
            $("#imgCol").append(lossImg);
            gameShow.questionsWrong++;
            setTimeout(function () {
                $("#imgCol").empty();
                gameShow.displayQuestion();
            }, 5000);
        }
    },
    summary: function () {
        //shows the final results
    }

}

//On Click function for answer choices
//Need to make it check if the answer is correct...
//Then do win or loss
console.log("Hey hey");
$(".button").on("click", function(){
    var buttonNumber = $(this).val();
    console.log(this);
    if(buttonNumber === gameShow.question1.correctAnswer){
        //trigger win
        questionsRight++;
        console.log("button pushed!");
        displayQuestion();
        
    } else{
        questionsWrong++;
        displayQuestion();
        console.log("button pushed!");
    }
})