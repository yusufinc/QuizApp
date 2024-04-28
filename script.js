const quiz = new Quiz(sorular);

const ui = new UI();

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  startTimer(10);
  ui.soruGoster(quiz.soruGetir());
  ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.nxt_btn.classList.remove("show");
});

ui.nxt_btn.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    ui.quiz_box.classList.add("active");
    quiz.soruIndex += 1;
    clearInterval(counter);
    startTimer(10);
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.nxt_btn.classList.remove("show");
  } else {
    clearInterval(counter);
    ui.quiz_box.classList.remove("active");
    ui.btn_start.classList.add("inactive");
    ui.score_box.classList.add("active");
    ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
  }
});

ui.bnt_quit.addEventListener("click", function () {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

function optionSelected(option) {
  clearInterval(counter);
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    option.classList.add("correct");
    quiz.dogruCevapSayisi += 1;
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.IncorrectIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disable");
  }

  ui.nxt_btn.classList.add("show");
}

let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.time_text.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counter);
      ui.time_text.textContent = "Süreniz bitti";

      let cevap = quiz.soruGetir().dogruCevap;

      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == cevap) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }
        option.classList.add("disable");
      }

      ui.nxt_btn.classList.add("show");
    }
  }
}
