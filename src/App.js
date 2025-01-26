import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import AuthForm from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<AddForm />} />
          <Route path="/edit/:id" element={<AddForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
