
const Control = ({ changeBank, name, volume, handleChangeVolume }) => {
    return (
        <div className="control">
            <h3>Volume: {Math.round(volume * 100)}%</h3>
            <input 
                max="1"
                min="0"
                step="0.01"
                type='range'
                value={volume}
                onChange={handleChangeVolume}
            />
            <div className="display" id="display">
                <h3>{name}</h3>    
            </div>
            <button onClick={changeBank}>Change Bank</button>
        </div>
    )
}

export default Control;