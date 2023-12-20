import React from "react";

const FirstComponent = (props) => {
    /* props = {animals: ['leopard 🐆', 'giraffe 🦒 ', 'zebra 🦓', 'elephant 🐘', 'monkey 🐵', 'lion 🦁']} */
    console.log(props)
    return (
        <fieldset>
            <legend>FirstComponent.jsx</legend>
            {props.animals.map((animal, idx)=> <h4 key={idx}>Animal From FC : {animal}  </h4>
            )}
        </fieldset>
    )
}
export default FirstComponent