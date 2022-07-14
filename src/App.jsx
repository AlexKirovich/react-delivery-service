import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'
import Main from "./components/Main";
import AddParcel from "./components/AddParcel";
import EditParcel from "./components/EditParcel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/add" element={<AddParcel />}/>
        <Route path="/edit/1" element={<EditParcel />} />
      </Routes>
    </Router>
  );
}

export default App;
