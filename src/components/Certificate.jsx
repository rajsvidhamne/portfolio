import React from "react";
import certificate from "./data/certificate.json";

const Certificate = () => {
  return (
    <>
      <div className="container ed" id="certificate">
        <h1>CERTIFICATES</h1>
        {certificate.map((data) => {
          return (
            <div
              key={data.id}
              className="cd-items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="right">
                <h2>{data.course}</h2>
                <h4>
                  <span style={{ color: "yellowgreen" }}>{data.name}</span>{" "}
                  <span style={{ color: "yellow" }}>{data.location}</span>
                </h4>
                <h5 style={{ color: "yellowgreen" }}>
                  Duration: {data.duration}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Certificate;
