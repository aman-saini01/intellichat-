import { MoveUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="font-medium text-xl">
          <Link to="/">
            <span className="text-white">IntelliChat</span>
          </Link>
        </div>

        <div className="flex h-7 w-55 justify-between text-white font-normal ">
          {/* Use navigate instead of setSignupOpen */}
          <button
            onClick={() => navigate("/signup")}
            className="border-b-1 flex items-center cursor-pointer hover:text-black font-normal"
          >
            Signup <MoveUpRight size={14} className="ml-1" />
          </button>

          <Link to="/setup-organization">
            <button className="pt-0.5 cursor-pointer hover:text-black">
              Setup Organization
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
