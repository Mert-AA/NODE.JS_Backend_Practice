// Node.js modülünün (yani dışarıdaki boş nesnenin) içine name ekliyoruz:
this.name = "Node.js Modül Mert";

global.name = "Global Mert";

const normalUser = {
  name: "Normal Mert",
  greet: function () {
    console.log("Normal: Hi, I am " + this.name);
  },
};

const arrowUser = {
  name: "Arrow Mert",
  greet: () => {
    console.log("Arrow: Hi, I am " + this.name);
  },
};

// --- TESTLER ---

// 1. Doğrudan obje üzerinden çağırıyoruz:
normalUser.greet(); // Çıktı: "Normal: Hi, I am Normal Mert"
// Neden? Çünkü greet() fonksiyonunu çağıran şey soldaki "normalUser" objesidir.

arrowUser.greet(); // Çıktı: "Arrow: Hi, I am Node.js Modül Mert" (Node.js'te undefined olabilir)
// Neden? Çünkü ok fonksiyonunun 'this'i objeye bakmaz. Objeyi çevreleyen global alana (doğduğu yere) bakar.

// 2. Şimdi fonksiyonları objelerden koparıp düz bir değişkene eşitleyelim ve öyle çağıralım:
const koparilmisNormal = normalUser.greet;
const koparilmisArrow = arrowUser.greet;

koparilmisNormal(); // Çıktı: "Normal: Hi, I am Global Mert" (Node.js'te undefined olabilir)
// Neden? Çünkü artık onu 'normalUser' çağırmadı. Düz fonksiyon olarak küresel (global) alanda çalıştırıldı!

koparilmisArrow(); // Çıktı: "Arrow: Hi, I am Node.js Modül Mert"
// Neden? Çünkü ok fonksiyonu doğduğu andaki 'this'e (global alana) mühürlenmişti, asla değişmez.
