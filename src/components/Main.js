import React from 'react'

function Main() {

    const date = new Date(2011, 12, 24, 12)
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "Morning"
        styles.color = "green"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "Afternoon"
        styles.color = "brown"
    } else {
        timeOfDay = "Evening"
        styles.color = "blue"
    }

    

    return (
        <h2 style ={styles}>Good {timeOfDay}</h2>
    )
}

export default Main 