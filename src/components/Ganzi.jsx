import { useState } from "react";

export default function Ganzi({ ganzi }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div className={`ganziContainer ${loading ? "" : "off"}`}>
        <img
          className="ganzi"
          src={`${process.env.PUBLIC_URL}/img${ganzi}.png`}
          alt="ganzi"
        />
      </div>
    </>
  );
}
