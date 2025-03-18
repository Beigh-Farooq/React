import React from "react"
function Card(Props){
    return (
        <>
            <div className="card">
                <h2>{Props.cardName}</h2>
                <p>This is a simple card with a title, paragraph, and a button at the bottom.</p>
                <button>{Props.btnText}</button>
            </div>
        </>
    )
}
export default Card