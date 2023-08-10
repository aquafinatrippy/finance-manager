import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { Header } from "./components/Header";
import { LoginView } from "./views/LoginView";
import { PrivateRoute } from "./components/PrivateRoute";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <div className="flex justify-center items-center h-full">
          <div className="container mx-auto px-4 py-8 ">
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<HomeView />} />
              </Route>
              <Route path="/login" element={<LoginView />} />
            </Routes>
          </div>
        </div>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
