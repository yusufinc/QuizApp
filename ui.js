function UI() {
  this.btn_start = document.querySelector(".btn-start");
  this.nxt_btn = document.querySelector(".next-btn");
  this.quiz_box = document.querySelector(".quiz-box");
  this.option_list = document.querySelector(".option_list");
  this.correctIcon = '<div class="icon"> <i class="fas fa-check"> </i></div>';
  this.btn_replay = document.querySelector(".btn_replay");
  this.bnt_quit = document.querySelector(".btn_quit");
  this.IncorrectIcon = '<div class="icon"> <i class="fas fa-times"> </i></div>';
  this.score_box = document.querySelector(".score_box");

  this.time_text = document.querySelector(".time_text");
}

UI.prototype.soruGoster = function (soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = " ";

  for (let cevap in soru.cevapSecenekleri) {
    options += `
      <div class="option">
      <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
      </div>
      `;
  }
  document.querySelector(".question-text").innerHTML = question;
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute(
      "onclick",
      "optionSelected(this)"
    ); /*burada this kullanmazsa o zaman algılamıyor. undefined olmaması için this ile o anki elementi seçeriz.
    --optionSelected(this) fonksiyonunu çağırır. this, tıklandığında bu işlevin çalıştırıldığı elementi temsil eder. */
  }
};

UI.prototype.soruSayisiGoster = function (soruSirasi, toplamSoruSayisi) {
  let tag = `<span>${soruSirasi}</span> of <span>${toplamSoruSayisi}</span> Question`;

  document.querySelector(".question-number").innerHTML = tag;
};

UI.prototype.skoruGoster = function (toplamSoru, dogruCevap) {
  let tag = `Toplam ${toplamSoru} Sorudan ${dogruCevap} Doğru Cevap Verdiniz`;

  document.querySelector(".score_text").innerHTML = tag;
};
