let questions = [
  {
    'question' : 'What is a noun?',
    'answers': [
      {
        'value': 1,
        'answer': 'An action word of a doing work'
      },
      {
        'value': 2,
        'answer': 'A place, thing or event'
      },
      {
        'value': 3,
        'answer': 'A non-living thing'
      }
    ],
    'correctAnswer': 2
  },
  {
    'question' : 'Why are some birds yellow and some black?',
    'answers': [
      {
        'value': 1,
        'answer': 'Their coolours are yellow or black'
      },
      {
        'value': 2,
        'answer': 'Their natural colour is black'
      },
      {
        'value': 3,
        'answer': 'Their natural colour is yellow'
      }
    ],
    'correctAnswer': 1
  },
  {
    'question' : 'Where can melanin be found?',
    'answers': [
      {
        'value': 1,
        'answer': 'On an orange'
      },
      {
        'value': 2,
        'answer': 'In our digestive system'
      },
      {
        'value': 3,
        'answer': 'In our body'
      }
    ],
    'correctAnswer': 3
  },
  {
    'question' : 'Where can the liberty statue be found?',
    'answers': [
      {
        'value': 1,
        'answer': 'New Zealand'
      },
      {
        'value': 2,
        'answer': 'New York'
      },
      {
        'value': 3,
        'answer': 'Instanbul'
      }
    ],
    'correctAnswer': 2
  },
  {
    'question' : 'What is a movie?',
    'answers': [
      {
        'value': 1,
        'answer': 'A entertainment program'
      },
      {
        'value': 2,
        'answer': 'A western thing'
      },
      {
        'value': 3,
        'answer': 'I do not know'
      }
    ],
    'correctAnswer': 1
  }
];
let passedQuestion = [];
let failedQuestion = [];
let numberOfQuestions = questions.length;
let numberOfPassedQuestion;

for(let i = 0; i < numberOfQuestions; i++) {
  let message = questions[i].question  + "\n";
  for(let j = 0; j < questions[i].answers.length; j++) {
    message += `${questions[i].answers[j].value}. ${questions[i].answers[j].answer} \n`;
  }

  message += "\n\n Answer:";
  
  let userAnswer = prompt(message);
  let correctAnswerForQuestion = questions[i].correctAnswer;
  if(isNaN(userAnswer)) {
    alert("Please enter a number");
  } else if(userAnswer > 3) {
     alert("Please select an answer from the ones above");
  } else if(userAnswer === "") {
    alert("Please enter a value");
  } else if (parseInt(userAnswer) === correctAnswerForQuestion) {
    passedQuestion.push(userAnswer);
  } else {
    failedQuestion.push(userAnswer);
  }
}

numberOfPassedQuestion = passedQuestion.length;
message = `You got ${numberOfPassedQuestion} out of ${numberOfQuestions} questions. \n`;

if (numberOfPassedQuestion === numberOfQuestions) {
  message += "You have been awarded the Gold crown";
} else if (2 < numberOfPassedQuestion && numberOfPassedQuestion < numberOfQuestions) {
  message += "You have been awarded the Silver crown";
} else if (0 < numberOfPassedQuestion && numberOfPassedQuestion < 3) {
  message += "You have been awarded the Bronze crown";
} else {
  message += "You have NOT been awarded ANY crown";
}

alert(message);
