// const { PDFDocument } = require ('pdf-lib');
// const fs = require('fs');
// const { exit } = require('process');

// const pdfBytes = fs.readFileSync('sertifikat.pdf');
// const pdfDoc = await PDFDocument.load(pdfBytes);
// const page = pdfDoc.getPages;
// console.log(pdfDoc)
// const nameField = page.getTextField('Muhammad Irfansyahfalah');



// async function renameCertificates() {
//     // Baca daftar pemenang dari file "winners.txt"
//     const winners = fs.readFileSync('winners.txt', 'utf-8').split('\n');
  
//     // Looping untuk setiap nama pemenang
//     for (let i = 0; i < winners.length; i++) {
//       const winnerName = winners[i].trim();
  
//       // Baca sertifikat dari file PDF
//       const certificateBytes = await fs.promises.readFile('sertifikat.pdf');
//       const pdfDoc = await PDFDocument.load(certificateBytes);
      
//       // Ubah nama pemenang di sertifikat
//       const pages = pdfDoc.getPages();
//       console.log(pages)
//       exit
//       const textFields = pages[0].getTextFieldContent();
//       const nameField = textFields[0];
//       nameField.setText(winnerName);
  
//       // Simpan sertifikat dengan nama pemenang
//       const newFilename = `${winnerName}.pdf`;
//       const newPdfBytes = await pdfDoc.save();
//       await fs.promises.writeFile(newFilename, newPdfBytes);
//     }
//   }

  
//   renameCertificates();


const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const { writeFileSync, readFileSync } = require("fs");

async function createPDF() {
    const document = await PDFDocument.load(readFileSync("./sertifikat.pdf"));
  
    // console.log(document.getPage(0))
    const courierBoldFont = await document.embedFont(StandardFonts.Courier);
    const firstPage = document.getPage(0);
  
    firstPage.moveTo(72, 330);
    firstPage.drawText("John Doe \nSr. Vice President Engineering \nLogRocket", {
      font: courierBoldFont,
      size: 12,
      lineHeight: 10,
    });
  
    writeFileSync("jane-doe.pdf", await document.save());
  }
  
  createPDF().catch((err) => console.log(err));