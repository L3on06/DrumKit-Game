import React, { useEffect, useState } from "react";

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

        audioTag.currentTime = 0;
        audioTag.play();
    }

    return (
        <div onClick={playSound}>
            <audio id={clip.keyTrigger} src={clip.url} />
            {clip.keyTrigger}
        </div>
    )
}

export default Audio;
