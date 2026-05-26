import React from 'react';
import './App.css';

function App() {

  const courses = [
    {
      title: "Machine Learning ",
      instructor: "Dr. Sarah Chen",
      category: "Data Science",
      students: "24,500",
      image: "/pics/Machine.webp"
    },
    {
      title: "Web Development Bootcamp",
      instructor: "Mark Johnson",
      category: "Programming",
      students: "18,300",
      image: "/pics/webdev.jpeg"
    },
    {
      title: "Digital Marketing Mastery",
      instructor: "Emily Rodriguez",
      category: "Marketing",
      students: "15,700",
      image: "/pics/markething.jpg"
    },
    {
      title: "Financial Literacy 101",
      instructor: "Robert Williams",
      category: "Finance",
      students: "12,900",
      image: "/pics/finance.jpg"
    },
    {
      title: "UI/UX Design Principles",
      instructor: "Aisha Patel",
      category: "Design",
      students: "19,200",
      image: "/pics/uiux.jpg"
    },
    {
      title: "Python for Data Analysis",
      instructor: "James Thompson",
      category: "Programming",
      students: "22,100",
      image: "/pics/dsa.png"
    },
    {
      title: "Public Speaking Masterclass",
      instructor: "Lisa Wong",
      category: "Communication",
      students: "10,500",
      image: "/pics/publikspeak.png"
    },
    {
      title: "Photography Basics",
      instructor: "Carlos Martinez",
      category: "Art",
      students: "14,800",
      image: "/pics/photo.jpg"
    }
  ];

  return (
    <div className="container">
      <h1>Trending Courses</h1>
      
      <div className="course-grid">
        {courses.map((course) => (
          <div  className="course-card">
           
            <img 
              src={course.image} 
              alt={course.title}
              className="course-image"
            />
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-instructor">{course.instructor}</p>
              <div className="course-details">
                <span className="course-category">{course.category}</span>
                <span className="course-students">{course.students} students</span>
              </div>
              <button className="course-button">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;