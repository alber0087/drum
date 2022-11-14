import { useEffect } from 'react';

const KeyboardKey = ({ play, sound: { id, key, url, keyCode } }) => {

    const handleKeydown = (event) => {
        if (event.keyCode === keyCode) {
            play(key, id)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
    }, [])

    return (
        <div>
            <button
                id={keyCode} 
                className="drum-pad"
                onClick={() => play(key, id)}
            >
                <audio 
                    id={key}
                    src={url} 
                    className="clip"
                />
                {key}
            </button>
        </div>    
    )
}

export default KeyboardKey;