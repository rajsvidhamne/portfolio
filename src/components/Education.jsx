import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <>
      <div className="container ed" id="education">
        <h1>EDUCATION</h1>
        {education.map((data) => {
          return (
            <div
              key={data.id}
              className="ed-items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="left">
                <img
                  src={
                    data.imageSrc
                      ? `/assets/${data.imageSrc}`
                      : "/assets/default-image.jpg"
                  }
                  alt={data.collegeName}
                  style={{
                    maxWidth: "150px",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="right">
                <h2>{data.degree}</h2>
                <h4>
                  <span style={{ color: "yellowgreen" }}>
                    {data.collegeName}
                  </span>{" "}
                  <span style={{ color: "yellow" }}>{data.location}</span>
                </h4>
                <h5 style={{ color: "yellowgreen" }}>
                  Passing Year: {data.passingYear}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
