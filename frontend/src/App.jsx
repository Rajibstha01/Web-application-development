// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home.jsx";
import AddStudent from "./Pages/AddStudent";
import StudentDetail from "./Pages/StudentDetail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-right" />
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <AddStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/:id"
              element={
                <ProtectedRoute>
                  <StudentDetail />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
