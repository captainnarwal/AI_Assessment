// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'https://example.com/api', // Replace with your backend API
// });

// Mock the login function to return the given token
export const fetchIntereviews = async (token) => {
  console.log('Mock API hit with token:', token);

  // Pretend to hit the API and return a mock response
  return [
    {
      "interview_id": "INT-2025-001",
      "scheduled_on": "2025-01-10",
      "scheduled_at": "10:30 AM",
      "job_role": "Software Engineer",
      "skill": "Java, Spring Boot, REST APIs",
      "duration": "60 minutes"
    },
    {
        "interview_id": "INT-2025-002",
        "scheduled_on": "2025-01-10",
        "scheduled_at": "11:30 AM",
        "job_role": "Data Analyst",
        "skill": "Java, Spring Boot, REST APIs",
        "duration": "60 minutes"
      },
    {
      "interview_id": "INT-2025-003",
      "scheduled_on": "2025-01-12",
      "scheduled_at": "02:00 PM",
      "job_role": "Data Scientist",
      "skill": "Python, Machine Learning, SQL",
      "duration": "45 minutes"
    },
    {
      "interview_id": "INT-2025-004",
      "scheduled_on": "2025-01-15",
      "scheduled_at": "11:00 AM",
      "job_role": "Product Manager",
      "skill": "Product Strategy, Agile, Communication",
      "duration": "30 minutes"
    }
  ]
  ;
};

export default fetchIntereviews;
