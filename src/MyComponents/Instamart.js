import React, { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border border-blue-400 p-4 m-4">
      <h1 className="text-3xl font-bold ">{title}</h1>
      {isVisible && <p>{desc}</p>}

      <button
        className="pl-2 pr-2 pt-2 pb-2 border-2 text-white border-purple-700 bg-gray-900  mt-3"
        onClick={setIsVisible}
      >
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

function Instamart() {
  const [isVisible, setIsVisible] = useState("");
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Instamart</h1>
      <Section
        title={"Team Instamart"}
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200"
        isVisible={isVisible === "team"}
        setIsVisible={() => {
          if (isVisible === "team") {
            setIsVisible("");
          } else {
            setIsVisible("team");
          }
        }}
      />
      <Section
        title={"Career"}
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200"
        isVisible={isVisible === "career"}
        setIsVisible={() => {
          if (isVisible === "career") {
            setIsVisible("");
          } else {
            setIsVisible("career");
          }
        }}
      />

      <Section
        title={"Product"}
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200"
        isVisible={isVisible === "product"}
        setIsVisible={() => {
          if (isVisible === "product") {
            setIsVisible("");
          } else {
            setIsVisible("product");
          }
        }}
      />

      <Section
        title={"About"}
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200"
        isVisible={isVisible === "about"}
        setIsVisible={() => {
          if (isVisible === "about") {
            setIsVisible("");
          } else {
            setIsVisible("about");
          }
        }}
      />
      {/* <AboutInstamart/>
     <DetailsofInstamart/>
     <TeamofInstamart/>
     <Product/> */}
    </div>
  );
}

export default Instamart;
