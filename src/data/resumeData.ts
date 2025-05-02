// import { type } from "os"; // Remove unused import

export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export interface Project {
  name: string;
  duration?: string; // Optional duration
  points: string[];
}

export interface ResumeData {
  intro: string;
  aboutMe: string;
  workExperience: WorkExperience[];
  education: {
    institution: string;
    degree: string;
    duration: string;
    gpa?: string; // Optional GPA
  };
  projects: Project[];
  skills: {
    [category: string]: string[];
  };
  certificates: string[];
  internships: string[]; // Assuming Internship is separate or could be part of workExperience
}

export const resumeData: ResumeData = {
  intro: "Pardh Akash",
  aboutMe:
    "I'm a data scientist passionate about using my skills in machine learning and analytics to tackle real-world challenges. I'm eager to join a collaborative, forward-thinking team where I can contribute to innovative projects, grow through continuous learning, and deliver impactful solutions that make a difference.",
  workExperience: [
    {
      company: "AiVariant",
      role: "Data Science Intern",
      duration: "Nov 2024 to Feb 2025",
      points: [
        "Conducted comprehensive EDA and feature engineering, increasing classification accuracy by 12%.",
        "Enhanced model performance by 20% through missing value imputation, outlier detection (IQR method), and numerical feature standardization.",
        "Developed Five predictive models, achieving an average accuracy of 92%, while reducing complexity by 30% using VIF analysis.",
        "Deployed an interactive Streamlit application, leading to 25% boost in user engagement.",
      ],
    },
  ],
  education: {
    institution: "Ponnaiyah Ramajayam Institute of Science & Technology",
    degree: "Bachelor of Engineering",
    duration: "Oct 2021 to Aug 2025",
    gpa: "7.90",
  },
  projects: [
    {
      name: "Predictive Modeling for Attorney Involvement in Claims",
      points: [
        "Developed a machine learning model to predict attorney involvement in insurance claims, helping insurance companies optimize claim processing, reduce legal costs, and allocate resources efficiently.",
        "Improved classification accuracy by 12% through extensive EDA and feature engineering.",
        "Enhanced model performance by 20% using missing value imputation, outlier detection (IQR method), and feature standardization.",
        "Developed five machine learning models, achieving a highest accuracy of 95%, while reducing complexity by 30% using Variance Inflation Factor (VIF) analysis.",
        "Deployed an interactive Streamlit application, boosting user engagement by 25%.",
      ],
    },
    {
      name: "Ecommerce Customer Spending Prediction",
      duration: "14-09-2024 - 17-03-2025",
      points: [
        "Developed a machine learning model to predict yearly customer spending for an ecommerce platform, enabling businesses to optimize marketing strategies, personalize customer experiences, and improve revenue forecasting.",
        "Improved model performance by 18% through extensive exploratory data analysis (EDA), feature scaling, and label encoding techniques.",
        "Enhanced model reliability by addressing data quality issues with missing value imputation, outlier detection using the IQR method, and feature standardization to ensure consistent input distribution.",
        "Built and evaluated five machine learning models, achieving a highest prediction accuracy of 95% using a Linear Regression model, while reducing multicollinearity by 30% through Variance Inflation Factor (VIF) analysis.",
        "Deployed an interactive Streamlit application, increasing user engagement by 25%, allowing business users to input customer attributes and instantly receive predicted yearly spending estimates.",
      ],
    },
  ],
  skills: {
    "Programming Languages": ["C", "Python", "SQL"],
    "Machine Learning & Deep Learning": [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
    ],
    "Data Science & Analytics": ["Pandas", "NumPy", "SciPy", "StatsModels"],
    "Data Visualization": [
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Tableau",
    ],
    "Databases & Cloud Technologies": ["MySQL", "Firebase"],
    "Natural Language Processing": ["spaCy", "NLTK", "Transformers"],
    "Big Data & Processing": ["Apache Spark", "Dask"],
    "Development & IDEs": [
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "PyCharm",
    ],
  },
  certificates: ["Data Science-ExcelR"],
  internships: ["Intern Ship-ExcelR"], // Assuming this is a separate internship item based on resume
};
