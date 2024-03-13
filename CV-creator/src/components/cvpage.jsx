import "../styles/style.css";

export default function CVPage(personCV) {
  return (
    <div id="cv-page">
      <CreateGeneralSct
        personName={personCV.data.name}
        personEmail={personCV.data.email}
        personPhone={personCV.data.phone}
      />

      <CreateEducationSct
        personEducation={personCV.data.education}
        personEducationDate={personCV.data.date}
      />

      <CreateWorkSct
        personExperience={personCV.data.experience}
        personWorkPoisition={personCV.data.workposition}
        personResp={personCV.data.resp}
        personWorkStart={personCV.data.workstartdate}
        personWorkEnd={personCV.data.workenddate}
      />
    </div>
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
