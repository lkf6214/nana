import React from "react";
// import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "/img/test.jpg",
    alt: "test",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  // 나머지 이미지들...
];

const Content = {
  // backgroundColor: "yellow",
  height: "100vh",
  display: "flex",
  overflowX: "scroll",
  // border: "1px solid red",
  paddingTop: "2rem",
  // justifyContent: "center",
  alignItems: "center",
};

const CardArea = {
  height: "500px",
  display: "flex",
  justifyContent: "space-evenly",
  border: "1px solid red",
  padding: "1rem",
  overflowX: "auto",
};

const Cards = {
  width: "400px",
  paddingRight: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class Picture extends React.Component {
  render() {
    return (
      <div style={Content}>
        <div style={CardArea}>
          <div style={Cards}>
            <img src="/img/test.jpg" alt="test" style={{ width: "100%" }} />
          </div>
          <div style={Cards}>
            <img src="/img/test1.jpg" alt="test" style={{ width: "100%" }} />
          </div>
          <div style={Cards}>
            <img src="/img/test.jpg" alt="test" style={{ width: "100%" }} />
          </div>
          <div style={Cards}>
            <img src="/img/test1.jpg" alt="test" style={{ width: "100%" }} />
          </div>
          <div style={Cards}>
            <img src="/img/test.jpg" alt="test" style={{ width: "100%" }} />
          </div>
          {/* <div style={Cards}>
            <img src="/img/test1.jpg" alt="test" style={{ width: "100%" }} />
          </div> */}
        </div>

        <div photos={photos} style={{ backgroundColor: "red" }} />
      </div>
    );
  }
}

export default Picture;
