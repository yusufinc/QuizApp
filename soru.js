//initlization constructor function for Soru
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Hangisi js paket yönetim uygulamasıdır",
    { a: "Nodejs", b: "npm", c: "tailwind", d: "nuget" },
    "b"
  ),
  new Soru(
    "2-Hangisi .Net paket yönetim uygulamasıdır",
    { a: "Nodejs", b: "npm", c: "tailwind", d: "nuget" },
    "d"
  ),
  new Soru(
    "3-Hangisi frontend ile ilgilidir",
    { a: "scss", b: "db", c: "sql", d: "port" },
    "a"
  ),
  new Soru(
    "4-Hangisi backend ile ilgilidir",
    { a: "scss", b: "auth", c: "tailwind", d: "ui" },
    "b"
  ),
];
