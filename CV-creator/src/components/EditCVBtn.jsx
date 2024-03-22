import { useState } from "react";
import EditCVSct from "./EditCVSct";
import personCV from "../functions/data";

export default function EditCVBtn({ updatePCV }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editSctGridArea, setEditSctGridArea] = useState("3 / 9 / 15 / 15");

  function handleEditCVBtn() {
    setIsEditMode(!isEditMode);
    if (!isEditMode) {
      setEditSctGridArea("3 / 6 / 15 / 11");
    } else {
      setEditSctGridArea("3 / 9 / 15 / 15");
    }
    const cvpage = document.getElementById("cv-page");
    cvpage.style.gridArea = editSctGridArea;
  }

  return (
    <>
      {isEditMode ? (
        <EditCVSct
          personCV={personCV}
          updatePCV={updatePCV}
          handleEditCVBtn={handleEditCVBtn}
        />
      ) : (
        <button id="edit-cv-btn" onClick={handleEditCVBtn}>
          Edit CV
        </button>
      )}
    </>
  );
}
