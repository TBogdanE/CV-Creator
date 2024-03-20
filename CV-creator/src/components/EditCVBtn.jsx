import { useState } from "react";
import EditCVSct from "./EditCVSct";

export default function EditCVBtn({ data, updatePCV }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [gridArea, setGridArea] = useState("3 / 9 / 15 / 15");

  function handleEditCVBtn() {
    setIsEditMode(!isEditMode);
    if (!isEditMode) {
      setGridArea("3 / 6 / 15 / 11");
    }
    const cvpage = document.getElementById("cv-page");
    cvpage.style.gridArea = gridArea;
  }

  return (
    <>
      {isEditMode ? (
        <EditCVSct data={data} updatePCV={updatePCV} />
      ) : (
        <button id="edit-cv-btn" onClick={handleEditCVBtn}>
          Edit CV
        </button>
      )}
    </>
  );
}
