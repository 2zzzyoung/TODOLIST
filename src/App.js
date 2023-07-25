import { useState } from "react";
import MainPage from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const filters = ["all", "active", "completed"];
function App() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage filter={filter} filters={filters} onFilterChange={setFilter} />} />
            </Routes>
        </Router>
    );
}

export default App;
