/*const person = {
    name: 'Mert',
    age: 28,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
};*/ // outputs 'Hi, I am undefined' !!!!!!!!!!!!!!!!
/*  
Ok fonksiyonlarının kendine ait bir this kelimesi yoktur. İçinde bulundukları objeyi (person) asla tanımazlar.
Ok fonksiyonu yazıldığında, this kelimesi bir üst katmana (yani kodun çalıştığı küresel ortama / window veya global nesnesine) bakar. 
Küresel ortamda da name diye bir değişken tanımlı olmadığı için tarayıcı sana undefined (tanımsız) çıktısını verir.
*/

const person = {
  name: "Mert",
  age: 28,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

/*
Klasik fonksiyonlar ve metotlar, kendilerini kim çağırdıysa this olarak onu kabul ederler.
Sen ileride kodu person.greet() şeklinde çalıştırdığında, bu fonksiyonu çağıran şey person objesinin kendisi olduğu için, fonksiyonun içindeki this kelimesi başarıyla person objesini gösterir. 
Böylece this.name dediğinde objenin içindeki 'Mert' değerine ulaşabilirsin.
*/

person.greet();

/*
let kisi = { isim: 'Max' };
let yeniKisi = kisi; // DİKKAT: Obje kopyalanmadı, sadece adres kopyalandı!
yeniKisi.isim = 'Anna'; 
console.log(kisi.isim); // Çıktı: 'Anna' !!! 
*/

/*
let kisi = { isim: 'Max' };
let kopyaKisi = { ...kisi }; // Yeni bir obje aç ve özellikleri içine saç
kopyaKisi.isim = 'Anna';
console.log(kisi.isim); // Çıktı: 'Max' (Orijinal korunmuş oldu!)
*/

/*
let kullanici = {
    isim: 'Max',
    adres: { sehir: 'Berlin' } // İç içe geçmiş obje
};

let kopyaKullanici = { ...kullanici };
kopyaKullanici.adres.sehir = 'Münih'; // İçteki objeyi değiştirdik!

console.log(kullanici.adres.sehir); // Çıktı: 'Münih' (Orijinal de değişti!)
*/
