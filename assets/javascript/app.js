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
    numberOfQuestions: 11,
    question1: {
        question: "When did Colorado become a state?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "4",
        choice1: "1870",
        choice2: "1901",
        choice3: "1856",
        choice4: "1876"
    },
    question2: {
        question: "Who was the first person to summit Pikes Peak?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "2",
        choice1: "James Connor",
        choice2: "Edwin James",
        choice3: "Zebulon Pike",
        choice4: "Edmund Hillary"
    },
    question3: {
        question: "What is Colorado's state fossil?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "1",
        choice1: "Stegosaurus",
        choice2: "Triceratops",
        choice3: "T-Rex",
        choice4: "Apatasaurus"
    },
    question4: {
        question: "What is the tallest mountain in Colorado?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "2",
        choice1: "Pikes Peak",
        choice2: "Mount Elbert",
        choice3: "Longs Peak",
        choice4: "Mount Castle"
    },
    question5: {
        question: "Which Colorado city is known as the 'Choice City'?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "3",
        choice1: "Boulder",
        choice2: "Colorado Springs",
        choice3: "Fort Collins",
        choice4: "Denver"
    },
    question6: {
        question: "What is Colorado's official state dance?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "4",
        choice1: "The Waltz",
        choice2: "The Two-Step",
        choice3: "Line Dance",
        choice4: "Square Dance"
    },
    question7: {
        question: "Where does Colorado get its name?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "1",
        choice1: "The red soil",
        choice2: "Native Americans",
        choice3: "Fransico Colorado",
        choice4: "An early fort in the area"
    },
    question8: {
        question: "What was the original name for the Colorado River?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "4",
        choice1: "Amazing River",
        choice2: "Red River",
        choice3: "Roaring Fork",
        choice4: "Grand River"
    },
    question9: {
        question: "Which city is near the lowest elevation in Colorado?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "2",
        choice1: "Stirling",
        choice2: "Wray",
        choice3: "Pueblo",
        choice4: "Rocky Ford"
    },
    question10: {
        question: "What does the blue color in Colorado's state flag stand for?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "3",
        choice1: "The Lakes resevoirs",
        choice2: "Nothing",
        choice3: "The blue sky",
        choice4: "The blue corn"
    },
    question11: {
        question: "What Colorado mountains appear on the Coors beer can?",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: "2",
        choice1: "Pikes Peak",
        choice2: "The Maroon Bells",
        choice3: "Quandry Peak",
        choice4: "Mount Evans"
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

                } else {
                    gameShow.triggerLoss();
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
        }, 3500);
    },
    triggerLoss: function () {
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
        }, 3500);

    },
    summary: function () {
        //shows the final results
        $("#timerCol, #imgCol, #answerCol, #questionCol").empty();
        $("#questionCol").html("<h2 class='summary'> Answers Correct: " + gameShow.questionsRight + "</h2> <br> <h2 class='summary'> Answers Wrong: " + gameShow.questionsWrong + "</h2>");
        $("#imgCol").html("<button id='start' class='btn btn-success'>Restart Quiz</button>");
    }

}

$("#start").on("click", function(){
    $("#start").remove();
    gameShow.displayQuestion();
})
