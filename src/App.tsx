import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Register from "pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
