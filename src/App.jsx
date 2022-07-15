import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main/Main.jsx";
import AddParcel from "./components/AddParcel/AddParcel.jsx";
import EditParcel from "./components/EditParcel/EditParcel.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Delivery Service</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<AddParcel />} />
          <Route path="/edit/:id" element={<EditParcel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
