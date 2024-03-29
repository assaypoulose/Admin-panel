import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard";
import StudentsList from "./StudentsList";
import TeachersList from "./TeachersList";
import EditTeachers from "./EditTeachers";
import Sidebar from "./Sidebar";
import EditStudents from "./EditStudents";
import ActionStudents from "./ActionStudents";
import ActionTeachers from "./ActionTeachers"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students/all" element={<StudentsList />} />
          <Route path="/teachers/all" element={<TeachersList />} />
          <Route path="/editTeachers" element={<EditTeachers />} />
          <Route path="/editStudents" element={<EditStudents />} />
          <Route path='/studentAction' element={<ActionStudents />} />
          <Route path='/studentAction/:id' element={<ActionStudents />} />
          <Route path='/studentAction/:id/:isView' element={<ActionStudents />} />
          <Route path='/teacherAction' element={<ActionTeachers />} />
          <Route path='/teacherAction/:id' element={<ActionTeachers />} />
          <Route path='/teacherAction/:id/:isView' element={<ActionTeachers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
