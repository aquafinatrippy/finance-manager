import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { Header } from "./components/Header";
import { LoginView } from "./views/LoginView";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Header />

        <div className="flex justify-center items-center h-full">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/login" element={<LoginView />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
