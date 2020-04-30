import React from 'react'

function ListCopy() {
    return (
        <ul>
            <li>
                <input type="checkbox" id="city1" name="city1" value="Singapore"></input>
                <label for="city1">Singapore</label>
            </li>

            <li>
                <input type="checkbox" id="city2" name="city2" value="Hyderabad"></input>
                <label for="city2">Hyderabad</label>
            </li>

            <li>
                <input type="checkbox" id="city3" name="city3" value="Mumbai"></input>
                <label for="city3">Mumbai</label>
            </li>
        </ul>
        
    )
}

export default ListCopy