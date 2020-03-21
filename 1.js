function ganti_kata(kata, yang_mau_diganti, kata_pengganti) {
  let kataN = kata.split("");
  let kataBaru = [];
  kataN.forEach(kata => {
    if (kata == yang_mau_diganti) {
      kataBaru.push(kata_pengganti);
    } else {
      kataBaru.push(kata);
    }
  });

  console.log(`Kata Sebelumnya: ${kata}`);
  console.log(`Kata Baru: ${kataBaru.join("")}`);
}

ganti_kata("Purwarkata", "a", "o");
