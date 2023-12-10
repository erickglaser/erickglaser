//scroll menu
const initScrollSuave = () => {
  const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sectionNav = document.querySelector(href);

    sectionNav.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linkInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
};
initScrollSuave();

//seções animaçao

// progresso circular
let progressoCircular = document.querySelectorAll('.progresso-circular');
let valorProgresso = document.querySelectorAll('.valor-progresso');
const sections = document.querySelectorAll('.js-scroll');
console.log(sections[1]);

const velocidade = 20;

const ativarAnimacao = () => {
  valorProgresso.forEach((e, i1) => {
    const valorFinal = parseFloat(e.innerHTML);
    let valorInicial = 0;
    const progresso = setInterval(() => {
      e.textContent = `${valorInicial}%`;
      if (valorInicial == valorFinal) {
        clearInterval(progresso);
      }
      progressoCircular.forEach((e2, i) => {
        e2.style.background = `conic-gradient(#39bea3  ${
          (i === i1 ? valorInicial : e.textContent) * 3.6
        }deg, #4b4b4b 0deg)`;
      });
      valorInicial++;
    }, velocidade);
  });
};

const windowMetade = window.innerHeight * 0.8;

window.addEventListener('scroll', animaScroll);

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add('ativo');
    } else if (section.classList.contains('ativo')) {
      section.classList.remove('ativo');
    }
  });
}

//Observer ativar animação circular

const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ativarAnimacao();
        observer1.disconnect();
      }
    });
  },
  {
    threshold: 0.4,
  },
);

observer1.observe(sections[1]);

//linguas

let progressBar = document.querySelectorAll('.progress-bar');
let valorProgressoBar = document.querySelectorAll('.valor-progresso-bar');

const ativarAnimacao2 = () => {
  valorProgressoBar.forEach((e, i1) => {
    const valorFinal = parseFloat(e.innerHTML);

    let valorInicial = 0;

    const progressoBar = setInterval(() => {
      e.textContent = `${valorInicial}%`;
      if (valorInicial == valorFinal) {
        clearInterval(progressoBar);
      }

      progressBar.forEach((e2, i) => {
        if (i1 === i) {
          e2.style.width = e.textContent;
        }
      });
      valorInicial++;
    }, velocidade);
  });
};

//

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ativarAnimacao2();
        observer2.disconnect();
      }
    });
  },
  {
    threshold: 0.4,
  },
);

observer2.observe(sections[2]);

// //Botão mais detalhes
// const botaoDetalhes = document.querySelectorAll('.botao-detalhes');
// const detalhesProjetos = document.querySelectorAll('.detalhes-projetos');

// botaoDetalhes.forEach((e, index) => {
//   e.addEventListener('click', () => {
//     if (detalhesProjetos[index].style.display === 'block') {
//       detalhesProjetos[index].style.display = 'none';
//       e.innerHTML = 'Ver detalhes';
//     } else {
//       detalhesProjetos[index].style.display = 'block';
//       e.innerHTML = 'Ocultar detalhes';
//     }
//   });
// });
