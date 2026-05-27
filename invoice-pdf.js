

    async function downloadInvoice(){

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF("p", "mm", "a4");
    
        const item = dataBooking[indexEditAktif];
    
        const namaClient = item.namaLengkap || `${item.pengantinPria || ""} & ${item.pengantinWanita || ""}`;
        const tanggalInvoice = formatTanggalInvoice(new Date());
    
        const hargaPaket = angkaBersih(item.hargaPaket);

        const dp1 = angkaBersih(item.jumlahDp1);
        const dp2 = angkaBersih(item.jumlahDp2);
        const dp3 = angkaBersih(item.jumlahDp3);
        
        const biayaLainnya = angkaBersih(item.biayaLainnya);
        
        const totalBayar = dp1 + dp2 + dp3 + biayaLainnya;
        
        const totalPaket = angkaBersih(item.totalBiaya) || totalBayar;
    
        // HEADER
        doc.setFont("times", "bold");
        doc.setFontSize(24);
        doc.text("LUXCURYDECOR", 18, 22);
    
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        
        // OFFICE
        doc.setFont("helvetica", "normal");
doc.setFontSize(10);

// OFFICE
doc.text("Office", 18, 30);
doc.text(":", 40, 30);

doc.text(
    "Jl. Panglima Polim, RT.005/RW.003, Poris Plawad,",
    45,
    30
);

doc.text(
    "Kec. Cipondoh, Kota Tangerang, Banten 15141",
    45,
    34
);

// WORKSHOP
doc.text("Workshop", 18, 40);
doc.text(":", 40, 40);

doc.text(
    "Jl. Kp. Pulo, Gintung, Kec. Sukadiri,",
    45,
    40
);

doc.text(
    "Kabupaten Tangerang, Banten 15330",
    45,
    44
);

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
    

// LOGO GAMBAR DARI GOOGLE DRIVE
// const logoUrl = "/logo-lxd-2026.png";
const logoUrl =
"https://luxcury-decor-b77ad.web.app/logo-lxd-2026.jpg";

const logoBase64 = await loadImageAsBase64(logoUrl);

doc.addImage(
    logoBase64,
    "JPEG",
    125,
    12,
    60,
    45
);
    
        // BOX TAGIHAN
        doc.setFillColor(245, 245, 245);
        doc.rect(18, 72, 75, 24, "F");
    
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text("Tagihan Biaya Sewa WO, untuk bpk/ibu: ", 20, 78);
    
        doc.setFont("helvetica", "bold");
        doc.text(namaClient, 20, 87);
    

//NAMA PAKET
doc.setFont("helvetica", "bold");
doc.setFontSize(16);

doc.text(
    item.pilihanPaket || "-",
    20,
    110
);

// HARGA PAKET
// HARGA PAKET
doc.setFont("helvetica", "normal");
doc.setFontSize(11);

doc.text(
    `Harga Paket : Rp ${formatAngka(hargaPaket)}`,
    20,
    118
);


// KEMBALIKAN FONT NORMAL
doc.setFont("helvetica", "normal");
doc.setFontSize(10);

        // BOX TANGGAL
        doc.setFillColor(245, 245, 245);
        doc.rect(108, 72, 82, 10, "F");
    
        doc.setFont("helvetica", "normal");
        doc.text(`Tanggal Acara Pernikahan : ${item.tanggalAcara || "-"}`, 112, 78);
        
    
        // METODE PEMBAYARAN
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
        doc.text("Bca / BRI", 152, 121);
    
        doc.text("No Rek", 112, 128);
        doc.text(":", 145, 128);
        doc.text("867-048-7548", 152, 128);
        doc.text("7956-0100-1305-530", 152, 134);
    
        // TABLE HEADER
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
// 1
doc.text("DP pertama", 20, y);

doc.text(
    dp1 ? `Rp ${formatAngka(dp1)}` : "Rp 0",
    150,
    y
);

doc.line(18, y + 6, 192, y + 6);

y += 15;


// 2
doc.text("DP kedua", 20, y);

doc.text(
    dp2 ? `Rp ${formatAngka(dp2)}` : "Rp 0",
    150,
    y
);

doc.line(18, y + 6, 192, y + 6);

y += 15;


// 3
doc.text("Pelunasan", 20, y);

doc.text(
    dp3 ? `Rp ${formatAngka(dp3)}` : "Rp 0",
    150,
    y
);

doc.line(18, y + 6, 192, y + 6);

y += 15;


// 4    
doc.text("Biaya lain di luar paket", 20, y);

doc.text(
    biayaLainnya
    ? `Rp ${formatAngka(biayaLainnya)}`
    : "Rp 0",
    150,
    y
);


// 5


doc.line(18, y + 6, 192, y + 6);

y += 15;


//6
doc.text("Total Biaya", 20, y);

doc.text(
    `Rp ${formatAngka(totalPaket)}`,
    150,
    y
);
doc.line(18, y + 6, 192, y + 6);

y += 15;

    
// TTD KANAN
// TTD KANAN

const sekarang = new Date();

const tanggalLengkap = sekarang.toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
});

// posisi otomatis setelah tabel
const posisiTtd = y + 10;

doc.setFont("helvetica", "normal");
doc.setFontSize(9);

doc.text(
    `Tanggal: ${tanggalLengkap} WIB`,
    120,
    posisiTtd
);

doc.text(
    "TTD elektronik Luxcury Decor",
    120,
    posisiTtd + 6
);

const namaPengantin =
`${item.pengantinPria || ""} & ${item.pengantinWanita || ""}`;

const qrText =
`https://luxcury-decor-b77ad.web.app/halaman-qrcode.html?client=${encodeURIComponent(namaPengantin)}&tanggal=${encodeURIComponent(item.tanggalAcara || "-")}`;

const qrImage = buatQRCode(qrText);

doc.addImage(
    qrImage,
    "PNG",
    80,
    posisiTtd - 7,
    40,
    40
);

function buatQRCode(text){

    const qr = qrcode(0, "M");

    qr.addData(text);

    qr.make();

    return qr.createDataURL(4);
}


        // SYARAT
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

const pdfBlob = doc.output("blob");

const pdfUrl = URL.createObjectURL(pdfBlob);

window.open(pdfUrl, "_blank");
    }
    
    function rowInvoice(doc, y, deskripsi, qty, harga, total){
    
        doc.setDrawColor(0, 0, 0);
        doc.line(18, y + 9, 192, y + 9);
    
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
    
        doc.text(String(deskripsi || ""), 20, y);
        doc.text(String(qty || ""), 98, y);
        doc.text(String(harga || ""), 114, y);
        doc.text(String(Harga || ""), 120, y);
    
        doc.setTextColor(0, 0, 0);
    }
    
    function angkaBersih(value){
        if(!value) return 0;
        return Number(String(value).replace(/\D/g, "")) || 0;
    }
    
    function formatAngka(value){
        return Number(value || 0).toLocaleString("id-ID");
    }
    
    function formatTanggalInvoice(date){
        const bulan = [
            "januari", "februari", "maret", "april", "mei", "juni",
            "juli", "agustus", "september", "oktober", "november", "desember"
        ];
    
        return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
    }

//AMBIL LOGO DARI Google DRIVE
async function loadImageAsBase64(url){

    const response = await fetch(url);

    const blob = await response.blob();

    return await new Promise((resolve) => {

        const reader = new FileReader();

        reader.onloadend = () => {
            resolve(reader.result);
        };

        reader.readAsDataURL(blob);

    });
}
