var questionNumber = 1;
var currentQuestion;
var intervalId;
var answerText;
var winImageArray = ["https://giphy.com/gifs/a0h7sAqON67nO/html5", "https://giphy.com/gifs/zaqclXyLz3Uoo/html5"];
var lossImgArray = ["https://giphy.com/gifs/fV2nYFD3akDuTUgVhy/html5", "https://giphy.com/gifs/ceeN6U57leAhi/html5"];
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
            gameShow.summary();
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
            //On Click functionality
            $(".button").on("click", function () {
                var buttonNumber = $(this).attr("value");
                if (buttonNumber === currentQuestion.correctAnswer) {
                    //trigger win
                    gameShow.triggerWin();
                    // clearInterval(intervalId);
                    // gameShow.questionsRight++;
                    // $("#timerText").text(" ");
                    // var randomImgNum = Math.floor(Math.random() * 2);
                    // var winImg = $("<img>").addClass("fluid-img thumbnail-img d-block mx-auto").attr("src", "assets/images/win1.png");
                    // $("#imgCol").append(winImg);
                    // $("."+ buttonNumber).attr("border", "solid red");
                    // setTimeout(function () {
                    //     $("#imgCol").empty();
                    //     gameShow.displayQuestion();
                    // }, 5000);

                } else {
                    gameShow.triggerLoss();
                    // clearInterval(intervalId);
                    // clearInterval(intervalId);
                    // gameShow.questionsWrong++;
                    // $("#timerText").text(" ");
                    // var randomImgNum = Math.floor(Math.random() * 2);
                    // var lossImg = $("<img>").addClass("fluid-img thumbnail-img d-block mx-auto").attr("src", "assets/images/fail.jpg");
                    // $("#imgCol").append(lossImg);
                    // setTimeout(function () {
                    //     $("#imgCol").empty();
                    //     gameShow.displayQuestion();
                    // }, 5000);
                }
            })
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
            // $("#timerText, #questionText").text(" ");
            // $("#answerCol").empty();
            clearInterval(intervalId);
            gameShow.questionsWrong++;
            $("#timerText").text(" ");
            var randomImgNum = Math.floor(Math.random() * 2);
            var lossImg = $("<img>").addClass("fluid-img thumbnail-img d-block mx-auto").attr("src", lossImgArray[randomImgNum]);
            $("#imgCol").append(lossImg);
            setTimeout(function () {
                $("#imgCol").empty();
                gameShow.displayQuestion();
            }, 5000);
        }
    },
    triggerWin: function () {
        clearInterval(intervalId);
        gameShow.questionsRight++;
        $("#timerText").text(" ");
        var randomImgNum = Math.floor(Math.random() * 2);
        var winImg = $("<img>").addClass("fluid-img thumbnail-img d-block mx-auto").attr("src", "assets/images/win1.png");
        $("#imgCol").append(winImg);
        $("." + currentQuestion.correctAnswer).attr("style", "border: solid 2px red;");
        setTimeout(function () {
            $("#imgCol").empty();
            gameShow.displayQuestion();
        }, 5000);
    },
    triggerLoss: function () {
        clearInterval(intervalId);
        clearInterval(intervalId);
        gameShow.questionsWrong++;
        $("#timerText").text(" ");
        var randomImgNum = Math.floor(Math.random() * 2);
        var lossImg = $("<img>").addClass("fluid-img thumbnail-img d-block mx-auto").attr("src", "assets/images/fail.jpg");
        $("#imgCol").append(lossImg);
        $("." + currentQuestion.correctAnswer).attr("style", "border: solid 2px red;");
        setTimeout(function () {
            $("#imgCol").empty();
            gameShow.displayQuestion();
        }, 5000);

    },
    summary: function () {
        //shows the final results
        $("#timerCol, #imgCol, #answerCol, #questionCol").empty();
        $("#questionCol").html("<h2> Answers Correct: " + gameShow.questionsRight + "</h2> <br> <h2> Answers Wrong: " + gameShow.questionsWrong + "</h2>");

    }

}