import React, { useEffect, useState } from "react";
import "./Assets/Style/Global.css";
import "./Assets/Style/App.css";

function Audio({ clip }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);


    const handleKeyPress = (e) => {
        if (e.keyCode === clip.keyCode) {
            playSound();
        }
    }

    const playSound = () => {
        const audioTag = document.getElementById(clip.keyTrigger)
        setActive(true);
        setTimeout(() => setActive(false), 150)

        audioTag.currentTime = 0;
        audioTag.play();
    }

    return (
        <div onClick={playSound} className={`clips-container ${active && 'clips-containerClick'}`} >
            <div className="flex">
                <audio id={clip.keyTrigger} src={clip.url} />
                {clip.keyTrigger}
            </div>
        </div>
    )
}

export default Audio;
