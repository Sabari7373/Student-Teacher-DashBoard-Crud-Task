import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Dashboard } from "./Dashboard";
import { Teachers } from "./Teachers";
import { Students } from "./Students";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { TeacherDetails } from "./TeacherDetails";
import { StudentDetails } from "./StudentDetails";
import { EditTeacher } from "./EditTeacher";
import { EditStudent } from "./EditStudent";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [teachers, setTeacher] = useState([
    {
      id: "001",
      name: "Sabari",
      gender: "Male",
      subject: "Html & Css",
      address: "chennai",
      email: "sabari@gmail.com",
      contact: 1234567890,
    },
    {
      id: "002",
      name: "Ezhil",
      gender: "Male",
      subject: "JavaScript",
      address: "palani",
      email: "ezhil@gmail.com",
      contact: 9874561230,
    },
    {
      id: "003",
      name: "dinesh",
      gender: "Male",
      subject: "React JS",
      address: "Chennai",
      email: "dinesh@gmail.com",
      contact: 1234567890,
    },
    {
      id: "004",
      name: "Bala",
      gender: "Male",
      subject: "Node JS",
      address: "Coimbatore",
      email: "Bala@gmail.com",
      contact: 1234567890,
    },
    {
      id: "005",
      name: "Surya",
      gender: "Male",
      subject: "Mongo DB",
      address: "Karaikudi",
      email: "thiru@gmail.com",
      contact: 5234897125,
    }
  ]);
  const [students,setStudent] = useState([
    {
      id: "01",
      name: "Sabari Arun",
      standard: "FSD Mern",
      batch: "B41 Tamil",
      address: "Tiruvannamalai",
      email: "sabari@gmail.com",
      contact: 9876543210,
    },
    {
      id: "02",
      name: "Bala Krishnan",
      standard: "Data Science",
      batch: "b41 english ",
      address: "chennai",
      email: "balakrishnan@gmail.com",
      contact: 9871212110,
    },
    {
      id: "03",
      name: "Kumar",
      standard: "Python devolopment",
      batch: "B42 tamil",
      address: "Coimbatore",
      email: "Kuamr@gmail.com",
      contact: 9121243210,
    },
    {
      id: "04",
      name: "Kumaresan",
      standard: "DataScience",
      batch: "B43 tamil",
      address: "Coimbatore",
      email: "Kuamresam@gmail.com",
      contact: 9121243287,
    },
    {
      id: "05",
      name: "Surya",
      standard: "FSD Mern ",
      batch: "B40 tamil",
      address: "karaikudi",
      email: "Surya@gmail.com",
      contact: 9121243210,
    },
    {
      id: "06",
      name: "mani",
      standard: "UI & UX",
      batch: "B41 Weekly",
      address: "Chennai",
      email: "mani@gmail.com",
      contact: 7373321250,
    },
    {
      id: "07",
      name: "perumal",
      standard: "UI & UX",
      batch: "B41 tamil",
      address: "Chennai",
      email: "perumal@gmail.com",
      contact: 7171321250,
    }
  ]);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar id="Appbar" position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/teachers")}>
              Teacher
            </Button>
            <Button color="inherit" onClick={() => navigate("/students")}>
              Student
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/students" element={<Students students={students} setStudent={setStudent} />} />
        <Route path="/teacher/details/:id" element={<TeacherDetails teachers={teachers} />} />
        <Route path="/student/details/:id" element={<StudentDetails students={students} />} />
        <Route path="/add/teacher" element={<AddTeacher teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/add/student" element={<AddStudent students={students} setStudent={setStudent} />} />
        <Route path="/teacher/edit/:id" element={<EditTeacher teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/student/edit/:id" element={<EditStudent students={students} setStudent={setStudent} />} />
      </Routes>
    </div>
  );
}

export default App;