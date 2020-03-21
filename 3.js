function renggang_waktu(waktu_awal, waktu_akhir) {
    let tanggalAwal = new Date(waktu_awal);
    let tanggalAkhir = new Date(waktu_akhir);

    let renggangWaktu = [];

    while (tanggalAwal <= tanggalAkhir) {
        let tahun, bulan, tanggal;
        tahun = tanggalAwal.getFullYear();
        bulan = tanggalAwal.getMonth();
        tanggal = tanggalAwal.getDate();

        if (tanggal <= 9) {
            tanggal = `0${tanggal}`;
        } else {
            tanggal = tanggal;
        }

        renggangWaktu.push(`${tahun}-${bulan + 1}-${tanggal}`);

        tanggalAwal.setDate(tanggalAwal.getDate() + 1);
    }

    console.log(renggangWaktu.join(", "));
}

renggang_waktu("2019-11-01", "2019-11-05");