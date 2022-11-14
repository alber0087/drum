import KeyboardKey from './KeyboardKey';

const Keyboard = ({ play, samples }) => (
    <div className="keyboard">
        {samples.map((sound) => <KeyboardKey  play={play} sound={sound}/>)}  
    </div>
)

export default Keyboard;

