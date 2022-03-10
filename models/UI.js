export class UI {
   // constructor(){}

/**
 * 
 * @param {string} text Pregunta a Renderizar
 */


    showQuestion(text){
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string[]} choices opciones de las respuestas
     *      */

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = ''
        
            for (let i = 0; i < choices.length; i++){
              const button = document.createElement('button');
              button.innerText = choices[i];
              button.className = 'button';
              button.addEventListener('click', ()=> callback(choices[i]) );
             
              choicesContainer.append(button);
            }
    }
/**
 * 
 * @param {number} score resultado de puntos
 */
//" <h1> Resultado</h1>  <h2>Tu Puntaje: ${score} </h2>";
showScores(score) {
    const gameOverHTML = `
      <h1>Resultado</h1> 
      <h2 id="score">Tu Puntaje: ${score}</h2> 
      `;
                 
              
        const element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;

    }
/**
 * 
 * @param {number} currentIndex pagina actual 
 * @param {number} total preguntas totales
 */


    showProgress(currentIndex, total) {
        const element = document.getElementById('progress')
        element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
    }
}