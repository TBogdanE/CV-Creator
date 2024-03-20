import personCV from "../functions/data";
import { useState } from "react";

export default function EditCVSct({ updatePCV }) {
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
        <SubmitBtn updatePCV={updatePCV} />
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
    <>
      <label>{title}:</label>
      <input
        type="text"
        value={text}
        className="edit-cv-sct-elements"
        onChange={handleChange}
      />
    </>
  );
}

function handleSubmit({ event, updatePCV }) {
  event.preventDefault();
  const dataaa = { ...personCV };
  updatePCV(dataaa);
  console.log("data3");
}

function SubmitBtn({ updatePCV }) {
  return (
    <>
      <button
        type="submit"
        id="edit-cv-sct-edit-btn"
        onClick={(event) => handleSubmit({ event, updatePCV })}
      >
        Submit
      </button>
    </>
  );
}
function CancelBtn() {}
