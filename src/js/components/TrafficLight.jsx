import React, { useState } from "react";

export const TrafficLight = () => {
    
    const [color, setColor] = useState("red");
    
    const [lights, setLights] = useState(["red", "yellow", "green"]);

    
    const cycleColor = () => {
        const currentIndex = lights.indexOf(color);
        const nextIndex = (currentIndex + 1) % lights.length;
        setColor(lights[nextIndex]);
    };

    
    const addPurple = () => {
        if (!lights.includes("purple")) {
            setLights([...lights, "purple"]);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <div className="traffic-light-container">
                {lights.map((luz, index) => (
                    <div
                        key={index}
                        onClick={() => setColor(luz)} // Cambia color al hacer clic
                        className={`light ${luz} ${color === luz ? "glow" : ""}`}
                    ></div>
                ))}
            </div>
            <div className="mt-4">
                <button className="btn btn-primary me-2" onClick={cycleColor}>Alternar</button>
                <button className="btn btn-info" onClick={addPurple}>Añadir Púrpura</button>
            </div>
        </div>
    );
};