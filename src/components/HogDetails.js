import React from "react"

function HogDetails ({hog}) {
    const { specialty, greased, weight, "highest medal achieved": medal} = hog
    return (
        <div>
        <h2>Weight: {weight}</h2>
        <h2>Specialty: {specialty}</h2>
        <h2>{greased ? "Greased" : "Ungreased"}</h2>
        <h2>{medal.toUpperCase()}</h2>
        </div>
    )
}

export default HogDetails