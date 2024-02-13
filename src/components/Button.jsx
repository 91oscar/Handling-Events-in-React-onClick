
export default function Button() {

    function handleClick() {
        console.log(`Hello bro`)
    }
    return(
        <div className="div__button">
            <button className="btn1" onClick={() => {alert("You also cliked me!")}}> 
            I do not do nothing</button>
            <button className="btn1" onClick={handleClick}>I do someting</button>  
        </div>  
    )
}