import {questions} from './data/questions.js';
import {Quiz} from './models/Quiz.js';
import {UI} from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz the main quiz objet
 * @param {UI} ui ui objet
 */

const renderPage =(quiz, ui) => {
    if (quiz.isEnded()){
        console.log(quiz.score);
        ui.showScores(quiz.score);

    }else { 
        ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
        quiz.gues(currentChoice)
        renderPage(quiz, ui)
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
  }
}

function main() {
   
    const quiz = new Quiz(questions);
    const ui = new UI();

   renderPage(quiz, ui)

}

main();