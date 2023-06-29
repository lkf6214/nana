import React from "react";
import FooterCss from "../css/FooterCss.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const email = "lkf6214@naver.com";
  const subject = "안녕하세요 nana님";
  const body = "외주 문의합니다.";

  const handleEmailClick = () => {
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <>
      <div className="footer">
        <div className="button_box">
          <ul className="box change">
            <li>Illustration</li>
            <li>Visual Design</li>
          </ul>
          <ul className="box sns">
            <li>
              <Link
                to="https://instagram.com/uuuunana?igshid=MTI1ZDU5ODQ3Yw=="
                target="_blank"
              >
                Instagram
              </Link>
            </li>
            <li>
              <span onClick={handleEmailClick}>Mail</span>
            </li>
          </ul>
        </div>

        <div className="slid_container">
          <div className="wrap slid_text">
            <span>{text}</span>
          </div>
          <div className="wrap slid_text2">
            <span>{text}</span>
          </div>
        </div>
      </div>
    </>
  );
}
