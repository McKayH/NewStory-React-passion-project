import { useState } from "react";
import { useSetBook } from "../functionalJS/Context";
import PAGE from "../Page";

export default function Search({changePage}) {
    const setTitle = useSetBook();
    const [text, setText] = useState("");

    const searchBook = ((e)=>{
        setText("");
        setTitle(text);
        changePage(PAGE.INFO);
    });
    
    return(
        <div className="Searchbar">
            <input type={'text'} placeholder="Book title" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={searchBook}>Search</button>
        </div>
    );
}