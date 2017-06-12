var gameState = {
  questions: [],
  correctAnswers: 0,
  questionCount: 0,
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
  console.log(gameState.questionCount);
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
