import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={< LoginPage />}></Route>
        <Route path="/profile" element={< ProfilePage />}></Route>
        <Route path="/" element={< HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
