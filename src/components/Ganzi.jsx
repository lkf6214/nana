import { useState } from "react";

export default function Ganzi({ ganzi }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div className={`ganziContainer ${loading ? "" : "off"}`}>
        {/* <img className="ganzi" src="../img/Neuronet/_순서.png" alt="ganzi" /> */}
        <img className="ganzi" src={`../img${ganzi}.png`} alt="ganzi" />
      </div>
    </>
  );
}
