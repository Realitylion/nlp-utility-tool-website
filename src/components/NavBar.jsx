import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ ...props }) {
  const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/");
    }

    const navigateToDocs = () => {
      navigate("/docs");
    }

    const navigateTrainModels = () => {
      navigate("/trainmodels");
    }

return (
    <div className="flex justify-center bg-gray-800 p-4 shadow-lg">
        <nav>
            <ul className="flex gap-8 text-white">
                <li>
                    <div className="cursor-pointer hover:text-gray-400" onClick={navigateToHome}>
                        Home
                    </div>
                </li>
                <li>
                    <div className="cursor-pointer hover:text-gray-400" onClick={navigateToDocs}>
                        Docs
                    </div>
                </li>
                <li>
                    <div className="cursor-pointer hover:text-gray-400" onClick={navigateTrainModels}>
                        Train Models
                    </div>
                </li>
            </ul>
        </nav>
    </div>
);
}