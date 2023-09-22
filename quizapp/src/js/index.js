/*
Sure! Here are 10 quiz questions with options and answers:

1. What is the capital of France?
   - A) Paris
   - B) London
   - C) Rome
   - D) Madrid

2. Who painted the Mona Lisa?
   - A) Leonardo da Vinci
   - B) Vincent van Gogh
   - C) Pablo Picasso
   - D) Claude Monet

3. What is the largest planet in our solar system?
   - A) Jupiter
   - B) Saturn
   - C) Mars
   - D) Earth

4. Who wrote the play "Romeo and Juliet"?
   - A) William Shakespeare
   - B) Oscar Wilde
   - C) Jane Austen
   - D) Charles Dickens

5. What is the chemical symbol for gold?
   - A) Au
   - B) Ag
   - C) Fe
   - D) Hg

6. Which country is known for its pyramids?
   - A) Egypt
   - B) China
   - C) Brazil
   - D) India

7. Who is the author of "To Kill a Mockingbird"?
   - A) Harper Lee
   - B) J.K. Rowling
   - C) George Orwell
   - D) Mark Twain

8. What is the largest ocean in the world?
   - A) Pacific Ocean
   - B) Atlantic Ocean
   - C) Indian Ocean
   - D) Arctic Ocean

9. Who discovered gravity?
   - A) Isaac Newton
   - B) Albert Einstein
   - C) Galileo Galilei
   - D) Nikola Tesla

10. What is the chemical formula for water?
    - A) H2O
    - B) CO2
    - C) NaCl
    - D) O2
*/


var quiz = [
   {
      question: "1. What is the capital of France?",
      option: ["Paris", "London", "Rome", "Madrid"],
      answer: "A"
   },
   {
      question: "2. Who painted the Mona Lisa?",
      option: ["Vincent van Gogh", "Leonardo da Vinci", " Pablo Picasso", "Claude Monet"],
      answer: "B"
   },
   {
      question: "3. What is the largest planet in our solar system?",
      option: ["Saturn", "Jupiter", "Mars", "Earth"],
      answer: "B"
   },
   {
      question: "4. Who wrote the play \"Romeo and Juliet\"?",
      option: ["William Shakespeare", "Oscar Wilde", "Jane Austen", "Charles Dickens"],
      answer: "A"
   },
   {
      question: "5. What is the chemical formula for water?",
      option: ["CO2", "NaCl", "H2O", "O2"],
      answer: "C"
   }
]
// console.log(quiz[0].answer);

class Game {

   constructor() {
      this.que_num = 0;
      this.que = quiz[this.que_num].question;
      this.opt = quiz[this.que_num].option;
      this.ans = quiz[this.que_num].answer;
   }
   render() {
      let question = document.querySelector("#question");
      let option1 = document.querySelector("#opt-a");
      let option2 = document.querySelector("#opt-b");
      let option3 = document.querySelector("#opt-c");
      let option4 = document.querySelector("#opt-d");
      question.innerHTML = this.que;
      option1.innerHTML = this.opt[0];
      option2.innerHTML = this.opt[1];
      option3.innerHTML = this.opt[2];
      option4.innerHTML = this.opt[3];
      //   console.log("this is option3:"+option3);

   }
   checkans(option) {
      let ans = this.ans == option ? 'green' : 'red';
      return [ans, this.ans];

   }
   changeQuestion(replace){
      this.que_num = replace=="next" ? this.que_num+1 : this.que_num-1;
      if(this.que_num < quiz.length && this.que_num >= 0){
         this.que = quiz[this.que_num].question;
         this.opt = quiz[this.que_num].option;
         this.ans = quiz[this.que_num].answer;
         
         if (this.que_num == quiz.length-1){
              document.querySelector('#next').innerHTML="Restart"          
         }
         this.render();         
         // console.log(this.que_num)
      }
      else{
            location.reload();
      }
   }
}


// Initiating the Game with load event to set default values
window.addEventListener("load", () => {
   game = new Game();
   game.render();
});

// User selects an option 
const optionSelected = (option) => {

   let options = {
      'opt-a': 'A',
      'opt-b': 'B',
      'opt-c': 'C',
      'opt-d': 'D'
   }
   // console.log( "this is option select ans:"+options[option]);

   // clear the background color of the previous event calls
   const arrvalues = Object.keys(options);
   for (const iterator of arrvalues) {
      document.querySelector(`#${iterator}`).style.backgroundColor = null;
   }
   // Changing the element color according to result from the class
   let ans = game.checkans(options[option]);
   if (ans[0] == 'green') {
      document.querySelector(`#${option}`).style.backgroundColor = "limegreen";
   }
   else {
      document.querySelector(`#${option}`).style.backgroundColor = 'tomato';
      // for correct answer 
      for (const key in options) {
         if (options[key] == ans[1]) {
            document.querySelector(`#${key}`).style.backgroundColor = "limegreen";
         }
      }
   }
}
// Change to Next question
const replaceQue = (replace)=>{
   game.changeQuestion(replace);
   optionSelected(null);
}
