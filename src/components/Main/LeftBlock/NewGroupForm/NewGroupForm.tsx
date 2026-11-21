import { useState } from "react";
import "./NewGroupForm.css"

export function NewGroupForm(){

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const elements = e.currentTarget.elements;


    const data = {
        name: (elements.namedItem('name') as HTMLInputElement).value,
    };
    console.log(data);
    alert(`Вы создали новую группу ${data['name']}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Новая группа</h2>
            <input id="newGroupName" 
                type="text" name="name" 
                placeholder="Введите название" 
                className="nameInput"/>
            <br />
            <input type='submit' value="Cоздать" className="submitButton"/>
        </form>
    )
}