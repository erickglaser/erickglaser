let progressoCircular = document.querySelectorAll('.progresso-circular span');
let valorProgresso = document.querySelectorAll('.valor-progresso span');

console.log(progressoCircular);
console.log(valorProgresso);

let valorInicial = 0;
let valorFinal = 100;
let velocidade = 10;

valorProgresso.forEach((element) => {
  element.textContent = valorInicial;
  progressoCircular.forEach((element) => {
    element.style.background =
      'conic-gradient(#091f1a  ${valorProgresso * 3.6}%, #ffffff 0deg)';
  });
});

// let progresso = setInterval(() => {
//   valorInicial++;
//   valorProgresso.textContent = '${valorInicial}%';
//   progressoCircular.style.background ='conic-gradient(#091f1a ${valorInicial * 3.6}%, #ffffff 0deg)';

//   if (valorInicial == valorFinal) {
//     clearInterval(progresso);
//   }
// }, velocidade);
