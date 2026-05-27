async function downloadInvoiceRegular(){

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");

    // ================================
    // DATA MANUAL / TEXT BIASA
    // ================================
    const namaClient = "Nama Client";
    const pengantinPria = "Nama Pengantin Pria";
    const pengantinWanita = "Nama Pengantin Wanita";
    const tanggalAcara = "26 Mei 2026";
    const pilihanPaket = "Paket Regular";

    // const hargaPaket = angkaBersih("5000000");

    // const dp1 = angkaBersih("1000000");
    // const dp2 = angkaBersih("0");
    // const dp3 = angkaBersih("0");

    // const biayaLainnya = angkaBersih("0");

    // const totalBayar = dp1 + dp2 + dp3 + biayaLainnya;
    // const totalPaket = hargaPaket || totalBayar;

    // ================================
    // HEADER
    // ================================
    doc.setFont("times", "bold");
    doc.setFontSize(24);
    doc.text("LUXCURYDECOR", 18, 22);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    // OFFICE
    doc.text("Office", 18, 30);
    doc.text(":", 40, 30);
    doc.text("Jl. Panglima Polim, RT.005/RW.003, Poris Plawad,", 45, 30);
    doc.text("Kec. Cipondoh, Kota Tangerang, Banten 15141", 45, 34);

    // WORKSHOP
    doc.text("Workshop", 18, 40);
    doc.text(":", 40, 40);
    doc.text("Jl. Kp. Pulo, Gintung, Kec. Sukadiri,", 45, 40);
    doc.text("Kabupaten Tangerang, Banten 15330", 45, 44);

    // TELP
    doc.text("Telp", 18, 50);
    doc.text(":", 40, 50);
    doc.text("0821-1806-2080", 45, 50);

    // INSTAGRAM
    doc.text("Instagram", 18, 55);
    doc.text(":", 40, 55);
    doc.text("@luxcurydecor", 45, 55);

    // EMAIL
    doc.text("Email", 18, 60);
    doc.text(":", 40, 60);
    doc.text("luxcurydecor.web@gmail.com", 45, 60);

    // LOGO
    const logoUrl = "/logo-lxd-2026.png";

    try {
        const logoBase64 = await loadImageAsBase64(logoUrl);

        doc.addImage(
            logoBase64,
            "PNG",
            125,
            12,
            60,
            45
        );
    } catch (error) {
        console.log("Logo tidak ditemukan, invoice tetap dibuat.");
    }

    // ================================
    // BOX TAGIHAN
    // ================================
    doc.setFillColor(245, 245, 245);
    doc.rect(18, 72, 75, 24, "F");

    // doc.setFont("helvetica", "normal");
    // doc.setFontSize(10);
    // doc.text("Tagihan Biaya Sewa WO, untuk bpk/ibu:", 20, 78);

    // doc.setFont("helvetica", "bold");
    // doc.text(namaClient, 20, 87);

    // // NAMA PAKET
    // doc.setFont("helvetica", "bold");
    // doc.setFontSize(16);
    // doc.text(pilihanPaket, 20, 110);

    // // HARGA PAKET
    // doc.setFont("helvetica", "normal");
    // doc.setFontSize(11);
    // doc.text(`Harga Paket : Rp ${formatAngka(hargaPaket)}`, 20, 118);

    // BOX TANGGAL
    doc.setFillColor(245, 245, 245);
    doc.rect(108, 72, 82, 10, "F");

    // doc.setFont("helvetica", "normal");
    // doc.setFontSize(10);
    // doc.text(`Tanggal Acara Pernikahan : ${tanggalAcara}`, 112, 78);

    // ================================
    // METODE PEMBAYARAN
    // ================================
    doc.setFillColor(245, 245, 245);
    doc.rect(108, 92, 82, 45, "F");

    doc.setFont("helvetica", "bold");
    doc.text("METODE PEMBAYARAN", 112, 99);

    doc.setFont("helvetica", "normal");
    doc.text("Silahkan transfer ke rekening", 112, 105);

    doc.text("Atas Nama", 112, 114);
    doc.text(":", 145, 114);
    doc.text("Lia Makia", 152, 114);

    doc.text("Nama Bank", 112, 121);
    doc.text(":", 145, 121);
    doc.text("BCA / BRI", 152, 121);

    doc.text("No Rek", 112, 128);
    doc.text(":", 145, 128);
    doc.text("867-048-7548", 152, 128);
    doc.text("7956-0100-1305-530", 152, 134);

    // ================================
    // TABEL
    // ================================
    let y = 142;

    doc.setFillColor(0, 0, 0);
    doc.rect(18, y, 174, 13, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);

    doc.text("Diskripsi", 20, y + 8);
    doc.text("Harga", 150, y + 8);

    doc.setTextColor(0, 0, 0);
    y += 22;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    // // DP PERTAMA
    // doc.text("DP pertama", 20, y);
    // doc.text(dp1 ? `Rp ${formatAngka(dp1)}` : "Rp 0", 150, y);
    // doc.line(18, y + 6, 192, y + 6);
    // y += 15;

    // // DP KEDUA
    // doc.text("DP kedua", 20, y);
    // doc.text(dp2 ? `Rp ${formatAngka(dp2)}` : "Rp 0", 150, y);
    // doc.line(18, y + 6, 192, y + 6);
    // y += 15;

    // // PELUNASAN
    // doc.text("Pelunasan", 20, y);
    // doc.text(dp3 ? `Rp ${formatAngka(dp3)}` : "Rp 0", 150, y);
    // doc.line(18, y + 6, 192, y + 6);
    // y += 15;

    // // BIAYA LAIN
    // doc.text("Biaya lain di luar paket", 20, y);
    // doc.text(
    //     biayaLainnya ? `Rp ${formatAngka(biayaLainnya)}` : "Rp 0",
    //     150,
    //     y
    // );
    // doc.line(18, y + 6, 192, y + 6);
    // y += 15;

    // // TOTAL BIAYA
    // doc.setFont("helvetica", "bold");
    // doc.text("Total Biaya", 20, y);
    // doc.text(`Rp ${formatAngka(totalPaket)}`, 150, y);
    doc.line(18, 240, 192, 240);

    // ================================
    // TTD + QR
    // ================================
    doc.text(
        "Tanggal:",
        120,
        252
    );
    
    doc.text(
        "TTD elektronik Luxcury Decor",
        120,
        258
    );

    // const namaPengantin = `${pengantinPria} & ${pengantinWanita}`;

    const qrText =
        `https://luxcury-decor-b77ad.web.app/halaman-qrcode.html`;

    const qrImage = buatQRCode(qrText);

    doc.addImage(
        qrImage,
        "PNG",
        78,
        245,
        40,
        40
    );
    // ================================
    // FOOTER
    // ================================
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Invoice elektronik resmi", 18, 252);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text([
        "Terima kasih telah menggunakan",
        "Jasa dekorasi kami. Harap",
        "simpan invoice ini sebagai bukti",
        "transaksi"
    ], 18, 262);

    const namaFile =
        "invoice-" +
        String(namaClient || "luxcury-decor")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") +
        ".pdf";

    doc.save(namaFile);
}


// ================================
// QR CODE
// ================================
function buatQRCode(text){

    const qr = qrcode(0, "M");

    qr.addData(text);

    qr.make();

    return qr.createDataURL(4);
}


// // ================================
// // ANGKA BERSIH
// // ================================
// function angkaBersih(value){

//     if(!value) return 0;

//     return Number(String(value).replace(/\D/g, "")) || 0;
// }


// // ================================
// // FORMAT ANGKA
// // ================================
// function formatAngka(value){

//     return Number(value || 0).toLocaleString("id-ID");
// }


// // ================================
// // FORMAT TANGGAL
// // ================================
// function formatTanggalInvoice(date){

//     const bulan = [
//         "januari", "februari", "maret", "april", "mei", "juni",
//         "juli", "agustus", "september", "oktober", "november", "desember"
//     ];

//     return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
// }


// ================================
// AMBIL LOGO
// ================================
function loadImageAsBase64(url){

    return new Promise((resolve, reject) => {

        const img = new Image();

        img.crossOrigin = "Anonymous";

        img.onload = function(){

            const canvas = document.createElement("canvas");

            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0);

            resolve(canvas.toDataURL("image/png"));
        };

        img.onerror = reject;

        img.src = url;
    });
}