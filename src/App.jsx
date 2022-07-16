import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main/Main.jsx";
import AddParcel from "./components/AddParcel/AddParcel.jsx";
import EditParcel from "./components/EditParcel/EditParcel.jsx";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <h1>Delivery Service</h1>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/add" element={<AddParcel />} />
            <Route path="/edit/:id" element={<EditParcel />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
