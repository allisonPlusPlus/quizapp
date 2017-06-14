var gameState = {
  questions: [],
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
      choices: ["Dorothy Vaughan", "Grace Hopper",  "Mary Jackson",  "Katherine Johnson"]
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
  $(".answer-tally").html(gameState.questionCount);
  questionCount(gameState);
}

initiateGame(questions, gameState);



function changeQuestion(questions, gameState){
  console.log(gameState.questionCount);
  var currentSelector = 'Q' + gameState.questionCount;
  var currentQuestion = questions[currentSelector];
  $(".question").html(currentQuestion.question);
  $(".a").html(currentQuestion.choices[0]);
  $(".b").html(currentQuestion.choices[1]);
  $(".c").html(currentQuestion.choices[2]);
  $(".d").html(currentQuestion.choices[3]);
  $(".answer-tally").html(gameState.questionCount);
}

function formSubmit() {
$("#submit-next").submit(function(event) {
  event.preventDefault();
});
questionCount(gameState);
}

$(function() {
  formSubmit();
});
