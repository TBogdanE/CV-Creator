import personCV from "../functions/data";
import { useState } from "react";

export default function EditCVSct({ data, updatePCV }) {
  return (
    <>
      <div id="edit-cv-sct">
        <InputData title={"Name"} seletor={"name"} value={data.name} />
        <InputData title={"Email"} seletor={"email"} value={data.email} />
        <InputData title={"Phone"} seletor={"phone"} value={data.phone} />
        <InputData
          title={"Education"}
          seletor={"education"}
          value={data.education}
        />
        <InputData title={"Date"} seletor={"date"} value={data.date} />
        <InputData
          title={"Experience"}
          seletor={"experience"}
          value={data.experience}
        />
        <InputData
          title={"Workposition"}
          seletor={"workposition"}
          value={data.workposition}
        />
        <InputData
          title={"Responsability"}
          seletor={"resp"}
          value={data.resp}
        />
        <InputData
          title={"Start date"}
          seletor={"workstartdate"}
          value={data.workstartdate}
        />
        <InputData
          title={"End date"}
          seletor={"workenddate"}
          value={data.workenddate}
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
