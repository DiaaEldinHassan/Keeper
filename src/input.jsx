import React from "react";

function Input(props) {
    function submit() {
        var title=document.getElementById("title").value;
        var note=document.getElementById("note").value;
        props.func(title,note);
    }
    return <div className="inputs">
    <input type="text" placeholder="Add title" id="title"/>
    <textarea cols="30" id="note" placeholder="Enter Your Note" rows="10"></textarea>
    <button className="submit" onClick={submit}>Submit</button>
    </div>
}
export default Input;