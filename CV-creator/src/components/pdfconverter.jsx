import jsPDF from "jspdf";
import personCV from "../functions/data";

export default function generatePDF() {
  const pdf = new jsPDF();

  pdf.setFontSize(1);

  const htmlContent = `
    <p>Name: ${personCV.name}</p>
    <p>Email: ${personCV.email}</p>
    <p>Phone: ${personCV.phone}</p>
    <p>Education: ${personCV.education}</p>
    <p>Start Date: ${personCV.date}</p>
    <p>Experience: ${personCV.experience}</p>
    <p>Work Position: ${personCV.workposition}</p>
    <p>Responsibilities: ${personCV.resp}</p>
    <p>Work Start Date: ${personCV.workstartdate}</p>
    <p>Work End Date: ${personCV.workenddate}</p>
  `;

  pdf.html(htmlContent, {
    callback: () => {
      pdf.save("my-cv.pdf");
    },
  });
}
