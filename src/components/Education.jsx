import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import resume from '../assets/resume.png';


import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={education.icon}
            alt={education.school}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{education.school}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {"Major: " + education.major + " "}
          <br />
          {"Minor: " + education.minor}   
          <br />
          {"GPA: " + education.gpa}       
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Conditionally render the button for the second education object */}
      {index === 1 && (
        <div className='mt-5'>
  <Button
  variant="primary"
  size="md"
  data-mdb-ripple-color="#c953d6"
  style={{
    backgroundColor: "#3c3078",
    color: "#fff",
    borderRadius: "50px",
    transition: "all 0.2s ease-in-out",
    width: "auto",
    height: "auto",
    padding: "15px 30px",
    fontSize: "1.2rem",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    cursor: "pointer",
    boxShadow: "2px 2px 6px #1d1836",
    border: "none",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#2d2464";
    e.target.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#3c3078";
    e.target.style.transform = "scale(1)";
  }}
  onClick={() => {
    const imgWin = window.open("", "_blank");
    imgWin.document.write(`<html><head><title>Resume</title></head><body><img src="${resume}" alt="Resume" style="width: 100%; height: auto;"></body></html>`);
  }}
>
  My Resume
</Button>
</div>
)}
</VerticalTimelineElement>


  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Education
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
