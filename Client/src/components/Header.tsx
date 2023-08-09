import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const links = [{ text: "Home", goTo: "/" }];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const changeLocation = (loc: string) => {
    if (loc !== location.pathname) {
      navigate(loc);
    }
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        {links.map(({ text, goTo }, index) => (
          <div key={index}>
            <Button variant="text" onClick={() => changeLocation(goTo)}>
              {text}
            </Button>
          </div>
        ))}
      </div>
    </nav>
  );
};
