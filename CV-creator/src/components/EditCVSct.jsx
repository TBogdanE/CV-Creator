import personCV from "../functions/data";
import { useState } from "react";
import generatePDF from "./pdfconverter";

export default function EditCVSct({ personCV, updatePCV, handleEditCVBtn }) {
  return (
    <>
      <div id="edit-cv-sct">
        <InputData title={"Name"} seletor={"name"} value={personCV.name} />
        <InputData title={"Email"} seletor={"email"} value={personCV.email} />
        <InputData title={"Phone"} seletor={"phone"} value={personCV.phone} />
        <InputData
          title={"Education"}
          seletor={"education"}
          value={personCV.education}
        />
        <InputData title={"Date"} seletor={"date"} value={personCV.date} />
        <InputData
          title={"Experience"}
          seletor={"experience"}
          value={personCV.experience}
        />
        <InputData
          title={"Workposition"}
          seletor={"workposition"}
          value={personCV.workposition}
        />
        <InputData
          title={"Responsability"}
          seletor={"resp"}
          value={personCV.resp}
        />
        <InputData
          title={"Start date"}
          seletor={"workstartdate"}
          value={personCV.workstartdate}
        />
        <InputData
          title={"End date"}
          seletor={"workenddate"}
          value={personCV.workenddate}
        />
        <Buttons updatePCV={updatePCV} handleEditCVBtn={handleEditCVBtn} />
      </div>
    </>
  );
}

function InputData({ title, value, seletor }) {
  const [text, setText] = useState(value);

  const handleChange = (event) => {
    setText(event.target.value);
    personCV[seletor] = event.target.value;
  };

  return (
    <div className="edit-cv-sct-box">
      <label>{title}:</label>
      <input
        type="text"
        value={text}
        className="edit-cv-sct-input"
        onChange={handleChange}
      />
    </div>
  );
}

function handleSubmit({ event, updatePCV, handleEditCVBtn }) {
  event.preventDefault();
  const data = { ...personCV };
  updatePCV(data);
  handleEditCVBtn();
}

function handleCancelEdit({ event, handleEditCVBtn }) {
  event.preventDefault();
  handleEditCVBtn();
}

function Buttons({ updatePCV, handleEditCVBtn }) {
  return (
    <div id="edit-cv-sct-btn-sct">
      <button
        type="submit"
        className="edit-cv-sct-btn"
        onClick={(event) => handleSubmit({ event, updatePCV, handleEditCVBtn })}
      >
        Save
      </button>
      <button
        className="edit-cv-sct-btn"
        onClick={(event) => handleCancelEdit({ event, handleEditCVBtn })}
      >
        Cancel
      </button>
      <button className="edit-cv-sct-btn" onClick={generatePDF}>
        Download PDF
      </button>
    </div>
  );
}
function CancelBtn() {}
