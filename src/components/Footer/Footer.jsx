import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import RollingSlide from "./RollingSlide";
// import Ganzi from "../Ganzi";

export default function Footer() {
  // 새로고침시 유지
  const location = useLocation();

  // 이메일 js
  const email = "neuronet999@gmail.com";
  const subject = "";
  const body = "";

  const handleEmailClick = () => {
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  const text = "CONNECT +82)10 3374 3102 NEURONET999@GMAIL.COM";
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // console.log(location.pathname);
    // 페이지 로드 시 activeTab 값 설정
    if (location.pathname === "/" || location.pathname === "/3DService") {
      setActiveTab("fontColorChange");
    } else if (location.pathname === "/visualDesign") {
      setActiveTab("fontColorChange1");
    } else {
      setActiveTab("fontColorChange2");
    }
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // let textColor = "";
  // if (activeTab === "fontColorChange2") {
  //   textColor = "shadowBlack";
  // } else if (activeTab === "fontColorChange1") {
  //   textColor = "shadowNone";
  // }

  return (
    <>
      <div className="footer">
        {/* Illustration, Visual Design */}
        <div className="button_box">
          <ul className="box page">
            {/* 메인 페이지*/}
            {/* neuronet 페이지*/}
            <li className="NeuroNetBtn">
              <Link
                // to="/"
                to="3DService"
                onClick={() => handleTabClick("fontColorChange")}
                style={{
                  color: activeTab === "fontColorChange" ? "aqua" : "black",
                  textShadow:
                    activeTab === "fontColorChange"
                      ? "2px 2px 20px aqua"
                      : "none",
                }}
                className={
                  location.pathname === "3DService" || // url 경로가 /neuronet 라면 active 클래스 추가
                  activeTab === "fontColorChange" // active state 값이 fontColorChange1라면 active 클래스 추가
                    ? "active"
                    : ""
                }
                id="NeuroNetBtn"
              >
                <span>3D Service</span>
              </Link>
            </li>

            {/* visualDesign 페이지*/}
            <li className="VisualDesignBtn">
              <Link
                to="visualDesign"
                onClick={() => handleTabClick("fontColorChange1")}
                style={{
                  color:
                    activeTab === "fontColorChange1"
                      ? "red"
                      : activeTab === "fontColorChange"
                      ? "white"
                      : "",
                  textShadow:
                    activeTab === "fontColorChange1"
                      ? "2px 2px 20px red"
                      : "none",
                }}
                className={
                  location.pathname === "/nana/visualDesign" || // url 경로가 /sub 라면 active 클래스 추가
                  activeTab === "fontColorChange1" // active state 값이 fontColorChange1라면 active 클래스 추가
                    ? "active"
                    : ""
                }
                id="VisualDesignBtn"
              >
                <span>Visual Design</span>
              </Link>
            </li>

            <li className="IllustrationBtn">
              <Link
                to="Illustration"
                onClick={() => handleTabClick("fontColorChange2")}
                style={{
                  color:
                    activeTab === "fontColorChange2"
                      ? "rgba(61, 255, 40)"
                      : activeTab === "fontColorChange"
                      ? "white"
                      : "",
                  textShadow:
                    activeTab === "fontColorChange2"
                      ? // ? "2px 2px 20px rgb(0, 0, 0, 0.7)"
                        "2px 2px 20px rgba(61, 255, 40)"
                      : "none",
                }}
                className={
                  location.pathname === "/nana/Illustration" || // url 경로가 /sub 라면 active 클래스 추가
                  activeTab === "fontColorChange2" // active state 값이 fontColorChange1라면 active 클래스 추가
                    ? "active"
                    : ""
                }
                id="IllustrationBtn"
              >
                <span>Illustration</span>
              </Link>
            </li>
          </ul>

          {/* Instagram, mail */}
          <ul className="box sns">
            <li>
              <Link
                to="https://instagram.com/__neuronet?igshid=MmU2YjMzNjRlOQ=="
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
        <div
          className="rolling_slide"
          style={{
            color: activeTab === "fontColorChange" ? "white" : "black",
          }}
        >
          <RollingSlide
            // textColor={activeTab === "fontColorChange2" ? "shadowBlack" : ""}
            textColor={
              activeTab === "fontColorChange"
                ? "shadowBlack"
                : activeTab === "fontColorChange1"
                ? "shadowNone"
                : ""
            }
            // textColor={textColor}
            items={[text, text, text]}
          />
        </div>
      </div>
    </>
  );
}
