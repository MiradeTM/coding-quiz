var questions = [
    {question1: 'What does HTML stand for?',
    answers: ['hot tan men laying', 'hyper text markup language', 'hyperactive tense marked language', 'hardened terpsichore march landing'],
    correctAnswer: 'hyper text markup language'},
    {question2: 'Which of these is NOT a common data type?',
    answers: ['boolean', 'string', 'number', 'alert'],
    correctAnswer: 'alert'
    },
    {question3: 'What goes inside the parentheses in an if/else statement?',
    answers:['condition', 'argument', 'method', 'for loop'],
    correctAnswer: 'condition',
    },
    {question4: 'What do arrays store?',
    answers: ['numbers', 'strings', 'booleans', 'all of the above'],
    correctAnswer: 'all of the above',
    },
    {question5: 'String values must be put inside ___ when being assigned to variables.',
    answers: ['parentheses', 'curly brackets', 'quotations', 'commas'],
    correctAnswer: 'quotations',
    }
     ]
var timerEl = $('#timer')
var timeleft = questions.length*15;



function renderQuestion(answer){
questions.question1.answers.Each(function(answer){
    // $('#qBlock').$('<button>').attr('class', 'btn btn-success').text(answer);


})
    
}
function startQuiz(){ 

    $('.instructions').attr('class', "hide");
    $('#qBlock').removeClass('hide');
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          document.getElementById("timer").innerHTML = "Finished";
        } else {
          document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
      }, 1000);
      questions.forEach(function(question){
        document.getElementById('questionPrint').textContent([question]);
     });
}
    /*var i = 90;
        setInterval(function () {
            $("#countdown").html(i);
            i--;
        }, 1000);*/
  
 $('#start-quiz').on('click', startQuiz);