import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";


import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <div className='flex justify-end mt-5'>
      <Button
  variant="primary"
  size="md"
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
  
>
  Click me
</Button>

      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");