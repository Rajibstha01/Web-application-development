// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import StudentDetail from "./pages/StudentDetail";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
     <Toaster position="top-right" />
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/student/:id" element={<StudentDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;