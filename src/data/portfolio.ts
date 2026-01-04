import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Abhishek Kumar Sah",
    "title": "Computer Engineering Student",
    "email": "sahabhi1234567@gmail.com",
    "phone": "+91-7369087976",
    "linkedin": "LinkedIn Profile",
    "github": "GitHub Profile",
    "location": "",
    "summary": "Aspiring Computer Engineer with proficiency in various programming languages and frameworks. Experienced in developing machine learning models and cross-platform applications, with a competitive programming background and strong problem-solving skills."
  },
  "experience": [
    {
      "title": "Member",
      "company": "DSA/CP Team OpenCode Developer Society",
      "dates": "March 2024 Onwards",
      "description": "Active member focused on developing skills in data structures and algorithmic problem-solving.",
      "highlights": []
    },
    {
      "title": "Member",
      "company": "Finance Team Innovation Cell",
      "dates": "Jan 2024 Onwards",
      "description": "Participated in financial planning and budgeting for various innovation projects.",
      "highlights": []
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Technology, Computer Engineering",
      "institution": "National Institute Of Technology, Kurukshetra",
      "years": "2027",
      "gpa": "8.68"
    },
    {
      "degree": "Class 12",
      "institution": "Project High School, Sikty",
      "years": "2023",
      "gpa": "86.8%"
    },
    {
      "degree": "Class 10",
      "institution": "Project High School, Sikty",
      "years": "2021",
      "gpa": "86.2%"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Next Word Prediction using LSTM",
      "description": "Developed a neural language model using LSTM to predict the next word in a sentence, achieving a 95% training accuracy.",
      "technologies": [
        "Python",
        "TensorFlow",
        "Keras",
        "NLP",
        "LSTM",
        "Tokenization"
      ],
      "link": "",
      "github": "NoteBook"
    },
    {
      "name": "E-Commerce App",
      "description": "Built a cross-platform eCommerce app with Flutter and Dart, integrating Node.js and Express.js for backend systems, and Cloudinary for image storage.",
      "technologies": [
        "Flutter",
        "Dart",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary"
      ],
      "link": "",
      "github": "GitHub Repo"
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
