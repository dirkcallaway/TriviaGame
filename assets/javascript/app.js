var questionNumber = 1;
var currentQuestion;
var gameShow = {
    question1: {
        question: "This is question one.",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: 4,
        choice1: "Sample choice one.",
        choice2: "Sample choice two.",
        choice3: "Sample choice three.",
        choice4: "The correct choice."
    },
    question2: {
        question: "This is question two.",
        answerChoices: ["Sample choice one.", "Sample choice two.", "Sample choice three.", "The correct choice."],
        correctAnswer: 2,
        choice1: "Sample choice one.",
        choice2: "The correct choice.",
        choice3: "Sample choice three.",
        choice4: "Sample choice two."
    },
    displayQuestion(){
        $("#answerCol").empty();
        //Sets current question and grabs text
        currentQuestion = this["question" + questionNumber];
        var questionText = currentQuestion.question;
        $("#questionText").text(questionText);
        //Displays Answer Choices
        for(var i = 0; i < 4; i++){
            var className = (i + 1).toString();
            var answerDiv = $("<div>").addClass(className);
            var answerText = currentQuestion.answerChoices[i];
            answerDiv.text(answerText);
            $("#answerCol").append(answerDiv);
        }
        // for(var i = 1; i < 5; i++){
        //     var choice = "choice" + i;
        //     var answerDiv = $("<div>").addClass(choice);
        //     var answerText = this["question" + questionNumber]["choice" + i];
        //     answerDiv.text(answerText);
        //     $("#answerCol").append(answerDiv);
        // }
        questionNumber++;
    },
    startTimer(){

    }
}