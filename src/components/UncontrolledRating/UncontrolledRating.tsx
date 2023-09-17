import React, {useState} from 'react';

export function UncontrolledRating(props: any) {

    let [value, setValue]= useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => {setValue(1)}}>Жмяк</button>
            <Star selected={value > 1}/>
            <button onClick={() => {setValue(2)}}>Жмяк</button>
            <Star selected={value > 2}/>
            <button onClick={() => {setValue(3)}}>Жмяк</button>
            <Star selected={value > 3}/>
            <button onClick={() => {setValue(4)}}>Жмяк</button>
            <Star selected={value > 4}/>
            <button onClick={() => {setValue(5)}}>Жмяк</button>
        </div>
    )
}

function Star(props: any) {
    if (props.selected === true) {
        return <span><b>Star</b> </span>
    } else {
        return <span>Star </span>
    }

}