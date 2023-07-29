import { useState } from "react";
import "../styles/components/timer.css";

export default function Timer() {
    const [timer, setTimer] = useState("00:00:00");

    const currentTimer = () => {
        const now = new Date();
        const hours = ("0" + now.getHours()).slice(-2);
        const minutes = ("0" + now.getMinutes()).slice(-2);
        const seconds = ("0" + now.getSeconds()).slice(-2);
        setTimer(`${hours}:${minutes}:${seconds}`);
    };

    const currentTime = () => {
        setInterval(currentTimer, 1000);
    };
    currentTime();

    return (
        <>
            <h1 className="timer">
                <p>🕰</p>
                <p>{timer}</p>
            </h1>
        </>
    );
}
