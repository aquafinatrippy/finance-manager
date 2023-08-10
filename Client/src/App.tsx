import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <div className="bg-slate-100 min-h-screen">
        <Header />

        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomeView />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>

        <footer className="bg-gray-200 py-4 mt-auto">
          <div className="container mx-auto px-4">
            {/* Your footer content can go here */}
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
