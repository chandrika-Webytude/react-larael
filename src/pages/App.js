import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from './pages/Protected'
import Login from './pages/Login'
import Test_login from './pages/Test_login'
import Leave from './pages/Leave'
import LeaveHistory from './pages/LeaveHistory'
import Holidays from './pages/Holidays'
import AddHoliday from './pages/AddHoliday'
import Employee from './pages/Employee'
import EmployeesList from './pages/EmployeesList'
import EditHoliday from './pages/EditHoliday'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/register" element={<Login />} />
          <Route path="/login" element={<Test_login />} />

          <Route path="/leave" element={<Protected Cmp={Leave} />} />
          <Route path="/Holidays" element={<Protected Cmp={Holidays} />} />
          <Route path="/AddHoliday" element={<Protected Cmp={AddHoliday} />} />
          <Route path="/Employee" element={<Protected Cmp={Employee} />} />
          <Route path="/EmployeesList" element={<Protected Cmp={EmployeesList} />} />
          {/* <Route path="/EmployeeEdit" element={<Protected Cmp={EmployeeEdit} />} /> */}
          <Route path="/EditHoliday/:id" element={<Protected Cmp={EditHoliday} />} />
          <Route path="/" element={<Protected Cmp={LeaveHistory} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
