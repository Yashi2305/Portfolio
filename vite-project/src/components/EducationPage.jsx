import React from "react";
import "./EducationPage.css";

const educationData = [
  {
    degree: "Master’s in Computer Applications",
    year: "2023 - 2026",
    institution: "Maulana Azad National Institute of Technology, Bhopal",
    description:"8.52cgpa(till second semester)",
  },
  {
    degree: "Bachelor’s in Computer Applications",
    year: "2019 - 2022",
    institution: "University of Allahabad",
    description:"9.06cgpa",
  },
  {
    degree: "Class 12th",
    year: "2018 - 2019",
    institution: "Maharishi Vidya Mandir",
    description: "secured 75.06%",
    
  },
];

const EducationSection = () => {
  return (
   
    <section id="education" className="education">
      <h2 className="section-title">Education Timeline</h2>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3 className="degree">{item.degree}</h3>
              <p className="institution">{item.institution}</p>
              <span className="year">{item.year}</span>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
