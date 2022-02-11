import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
  useNavigate,
  useLocation,
  useParams,
  Link
} from "react-router-dom";
import Button from "./Button";

const TestRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/student" element={<Student />}>
            <Route path=":studentId" element={<StudentId />} />
          </Route>
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </Router>
    </div>
  );
};

const DashBoard = () => {
  const navigate = useNavigate();
  const handleChangeToSTudent = () => {
    navigate("/student", {state: 'Test'});

  }
  return (
    <div>
      <button className="btn btn-primary" onClick={handleChangeToSTudent}> Go to student </button>
      <Link className="btn btn-success mx-2" to="/student" state={"3000"}  > Go to Teacher </Link>
    </div>
  );
};
const Teacher = () => {
  return <h1>Teacher</h1>;
};
const Student = () => {
  const location = useLocation();
  let obj = {}
  return (
    <div>
      <h1>Student id is : {location?.state}</h1>
      <Outlet />
    </div>
  );
};
const StudentId = () => {
  const {studentId} = useParams();
  return <h1>StudentId {studentId}</h1>;
};

export default TestRoutes;
