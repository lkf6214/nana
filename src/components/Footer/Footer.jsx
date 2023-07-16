import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

import RollingSlide from "./RollingSlide";

export default function Footer() {
  // 새로고침시 유지
  const location = useLocation();

  // 이메일 js
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

  const text = "CONNECT +82)10 3374 3102 NANDRAWING@GMAIL.COM";
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // 페이지 로드 시 activeTab 값 설정
    if (location.pathname === "/") {
      setActiveTab("fontColorChange");
    } else if (location.pathname === "/sub") {
      setActiveTab("fontColorChange1");
    }
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="footer">
        {/* Illustration, Visual Design */}
        <div className="button_box">
          <ul className="box change">
            <li className="IllustrationBtn">
              <Link
                to="/"
                onClick={() => handleTabClick("fontColorChange")}
                style={{
                  color: activeTab === "fontColorChange" ? "green" : "black",
                  textShadow:
                    activeTab === "fontColorChange"
                      ? "2px 2px 20px rgb(0, 0, 0, 0.7)"
                      : "none",
                }}
                id="IllustrationBtn"
              >
                Illustration
              </Link>
            </li>
            <li className="VisualDesignBtn">
              <Link
                to="/sub"
                onClick={() => handleTabClick("fontColorChange1")}
                style={{
                  // color: activeTab === "fontColorChange1" ? "red" : "black",
                  textShadow:
                    activeTab === "fontColorChange1"
                      ? "2px 2px 20px red"
                      : "none",
                }}
                className={
                  location.pathname === "/sub" || // url 경로가 /sub 라면 active 클래스 추가
                  activeTab === "fontColorChange1" // active state 값이 fontColorChange1라면 active 클래스 추가
                    ? "active"
                    : ""
                }
                id="VisualDesignBtn"
              >
                <span>Visual Design</span>
              </Link>
            </li>
          </ul>

          {/* Instagram, mail */}
          <ul className="box sns">
            <li>
              <Link
                to="https://instagram.com/uuuunana?igshid=MTI1ZDU5ODQ3Yw=="
                target="_blank"
                className="snsBtn instagramBtn"
              >
                Instagram
              </Link>
            </li>
            <li>
              <span onClick={handleEmailClick} className="snsBtn EmailBtn">
                Mail
              </span>
            </li>
          </ul>
        </div>

        {/* slide */}
        <RollingSlide items={[text, text]} />
      </div>
    </>
  );
}
