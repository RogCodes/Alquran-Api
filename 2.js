function count_handshake(jumlah_orang) {
    let hasil_hs = 0;

    for (let i = 1; i <= jumlah_orang; i++) {
        for (let j = 1; j <= jumlah_orang - i; j++) {
            hasil_hs++;
        }
    }
    console.log(`Jumlah Orang: ${jumlah_orang} Orang`);

    console.log(`Jumlah Salaman: ${hasil_hs} Kali Salaman`);
}

count_handshake(6);