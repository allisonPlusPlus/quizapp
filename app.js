var gameState = {
    correctAnswers: 0,
    questionCount: 0,
    currentChoice: undefined
};

var questions = {
    Q1: {
        question: "Which woman was the lead software engineer on the Apollo?",
        answer: "Margaret Hamilton",
        choices: ["Margaret Hamilton", "Grace Hopper", "Annie Easley", "Mary Jackson"]
    },

    Q2: {
        question: "Which woman is credited for coining the term 'computer bug' ?",
        answer: "Grace Hopper",
        choices: ["Ada Lovelace", "Grace Hopper", "Anita Borg", "Lynn Conway"]
    },

    Q3: {
        question: "Which woman is said to be the world's first computer programmer?",
        answer: "Ada Lovelace",
        choices: ["Grace Hopper", "Radia Perlman", "Ada Lovelace", "Anita Borg"]
    },

    Q4: {
        question: "Which woman was NOT portrayed in the movie Hidden Figures?",
        answer: "Grace Hopper",
        choices: ["Dorothy Vaughan", "Grace Hopper", "Mary Jackson", "Katherine Johnson"]
    },

    Q5: {
        question: "Which woman computer scientist, electrical engineer, inventor is also a transgender activist?",
        answer: "Lynn Conway",
        choices: ["Lynn Conway", "Mary Jackson", "Anita Borg", "Radia Perman"]
    },

};

function questionCount(gameState) {
    gameState.questionCount += 1;
}

function initiateGame(questions, gameState) {
    $(".question").html(questions.Q1.question);
    $(".a").html(questions.Q1.choices[0]);
    $(".b").html(questions.Q1.choices[1]);
    $(".c").html(questions.Q1.choices[2]);
    $(".d").html(questions.Q1.choices[3]);
    // $(".answer-tally").html(gameState.questionCount);
    questionCount(gameState);
}

initiateGame(questions, gameState);



function changeQuestion(questions, gameState) {
    var currentSelector = 'Q' + gameState.questionCount;
    var currentQuestion = questions[currentSelector];

    if (gameState.questionCount <= 5) {
        $(".question").html(currentQuestion.question);
        $(".a").html(currentQuestion.choices[0]);
        $(".b").html(currentQuestion.choices[1]);
        $(".c").html(currentQuestion.choices[2]);
        $(".d").html(currentQuestion.choices[3]);
        $(".question-number").html(gameState.questionCount);
        $(".answer-tally").html(gameState.correctAnswers);
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    $(".question").html("Your final score is " + gameState.correctAnswers + " out of 5");
    $(".buttons").html("<a href='game.html'><button class='btn btn-default btn-lg center-block gamelink'> Play Again?</button></a>");
    $(".list-group").hide();
    $(".correct-or-incorrect").hide();
    $(".answer-tally").hide();
    $(".question-number").hide();
    $(".questions").hide();
    $(".answers").hide();
}



function submitAnswer(event) {
    // Determine if answer is correct
    var currentSelector = 'Q' + gameState.questionCount;
    var currentQuestion = questions[currentSelector];
    console.log(gameState.currentChoice);
    console.log(currentQuestion.answer);
    if (gameState.currentChoice === currentQuestion.answer) {
        console.log("correct");
        $(".correct-or-incorrect").html("Correct!").addClass("correct").removeClass("incorrect");
        updateAnswerTalley(gameState);
    } else {
        console.log("incorrect");
        $(".correct-or-incorrect").html("Incorrect! The correct answer was " + currentQuestion.answer).addClass("incorrect").removeClass("correct");
    }


    questionCount(gameState);
    changeQuestion(questions, gameState);
}

function updateAnswerTalley(gameState) {
    gameState.correctAnswers += 1;
}


function test() {
    console.log("success!");
}


$(function() {

    $('.list-group-item').on('click', function(event) {
        $('.list-group-item').removeClass('active');
        $(event.target).addClass('active');
        gameState.currentChoice = event.target.innerHTML;
    });

    $('#submit-next').on('click', submitAnswer);
});
