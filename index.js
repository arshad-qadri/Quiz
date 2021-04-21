const quizData = [
  {
    id: 1,
    que: '1) HTML stands for -',
    a: 'HighText Machine Language',
    b: 'HighText Machine Language',
    c: 'HyperText Markup Language',
    d: 'None of these',
    ans: 'ans3',
  },
  {
    id: 2,
    que: '2) CSS stands for -',
    a: 'Cascade style sheets',
    b: 'Color and style sheets',
    c: 'Cascading style sheets',
    d: 'None of the above',
    ans: 'ans3',
  },
  {
    id: 3,
    que: '3) Which type of JavaScript language is ___',
    a: 'Object-Oriented',
    b: 'Object-Based',
    c: 'Assembly-language',
    d: 'High-level',
    ans: 'ans2',
  },
  {
    id: 4,
    que: '4) Who develop react.js?',
    a: 'Apple',
    b: 'Facebook',
    c: 'Twitter',
    d: 'Google',
    ans: 'ans2',
  },
];
const question = document.querySelector('#question');
const submit = document.querySelector('#submit');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const answers = document.querySelectorAll('.answer');
const showAnswer = document.querySelector('.showAnswer');
const quizArea = document.querySelector('.quizArea');
const myshowAnswer = document.querySelector('.showAnswer');
let quizCount = 0;
let score = 0;
const getData = () => {
  question.innerHTML = quizData[quizCount].que;
  opt1.innerHTML = quizData[quizCount].a;
  opt2.innerHTML = quizData[quizCount].b;
  opt3.innerHTML = quizData[quizCount].c;
  opt4.innerHTML = quizData[quizCount].d;
};
getData();
const getCheckedAnswe = () => {
  let answer;
  answers.forEach(curAnsElm => {
    if (curAnsElm.checked) {
      answer = curAnsElm.id;
    }
  });
  return answer;
};
const unSelect = () => {
  answers.forEach(curAnsElm => (curAnsElm.checked = false));
};
submit.addEventListener('click', () => {
  const checkedAnswer = getCheckedAnswe();
  console.log(checkedAnswer);
  if (!checkedAnswer) {
    return alert('Please Choose Any Option');
  } else if (checkedAnswer === quizData[quizCount].ans) {
    score++;
  }

  quizCount++;
  unSelect();
  if (quizCount < quizData.length) {
    getData();
  } else {
    quizArea.classList.toggle('disp');
    myshowAnswer.classList.remove('disp');
    showAnswer.innerHTML = ` <h3>You scored ${score}/${quizData.length} 👌</h3> 
    <button onclick="location.reload()">Play Again</button> `;
  }
});
