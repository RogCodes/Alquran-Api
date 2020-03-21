function randomChar(jumlah) {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx1234567890";
    let charSplit = char.split("");
    let panjangChar = 32;
    let hasilAcak = [];
    let hasilAcakSementara = "";

    for (let i = 0; i < jumlah; i++) {
        for (let j = 0; j < panjangChar; j++) {
            let randomAngka = Math.floor(Math.random() * charSplit.length);
            hasilAcakSementara += charSplit[randomAngka];
        }
        hasilAcak.push(hasilAcakSementara);
        hasilAcakSementara = "";
    }
    console.log(hasilAcak.join("\n"));
}

randomChar(3);