import "../styles/style.css";
import personCV from "../functions/data";
import { useState } from "react";
import EditCVBtn from "./EditCVBtn";

export default function CVPage() {
  const [data, updatePersonCV] = useState(personCV);

  return (
    <>
      <div id="cv-page">
        <CreateGeneralSct
          personName={data.name}
          personEmail={data.email}
          personPhone={data.phone}
        />

        <CreateEducationSct
          personEducation={data.education}
          personEducationDate={data.date}
        />

        <CreateWorkSct
          personExperience={data.experience}
          personWorkPoisition={data.workposition}
          personResp={data.resp}
          personWorkStart={data.workstartdate}
          personWorkEnd={data.workenddate}
        />
      </div>
      <EditCVBtn updatePCV={updatePersonCV} />
    </>
  );
}

function CreateGeneralSct({ personName, personEmail, personPhone }) {
  return (
    <div className="cv-section">
      <div className="cv-title">
        Name:<span className="cv-text"> {personName}</span>
      </div>
      <div className="cv-title">
        Email:<span className="cv-text"> {personEmail}</span>
      </div>
      <div className="cv-title">
        Phone no:<span className="cv-text"> {personPhone}</span>
      </div>
    </div>
  );
}

function CreateEducationSct({ personEducation, personEducationDate }) {
  return (
    <div className="cv-section">
      <div className="cv-title">
        Education:<span className="cv-text"> {personEducation}</span>
      </div>
      <div className="cv-title">
        Start date:<span className="cv-text"> {personEducationDate}</span>
      </div>
    </div>
  );
}

function CreateWorkSct({
  personExperience,
  personWorkPoisition,
  personResp,
  personWorkStart,
  personWorkEnd,
}) {
  return (
    <div className="cv-section">
      <div className="cv-title">
        Experience:<span className="cv-text"> {personExperience}</span>
      </div>
      <div className="cv-title">
        Position:<span className="cv-text"> {personWorkPoisition}</span>
      </div>
      <div className="cv-title">
        Responsability:<span className="cv-text"> {personResp}</span>
      </div>
      <div className="cv-title">
        Start date:<span className="cv-text"> {personWorkStart}</span>
      </div>
      <div className="cv-title">
        End date:<span className="cv-text"> {personWorkEnd}</span>
      </div>
    </div>
  );
}
