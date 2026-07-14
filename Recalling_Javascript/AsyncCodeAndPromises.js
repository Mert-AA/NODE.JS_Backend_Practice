/*
const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData((x) => {
    console.log(x);
  });
}, 2000);

console.log("Hello!");
console.log("Hi!");
*/
/*
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");
*/

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

async function calistir() {
  console.log("Timer is done!");

  // 1. Paketi bekliyoruz ve gelen veriyi doğrudan değişkene eşitiyoruz!
  const text = await fetchData();
  console.log(text); // Done!

  // 2. İkinci paketi bekliyoruz
  const text2 = await fetchData();
  console.log(text2); // Done!
}

// Zamanlayıcı içinde bu fonksiyonu çağırmak yeterli:
setTimeout(calistir, 2000);

console.log("Hello!");
console.log("Hi!");
