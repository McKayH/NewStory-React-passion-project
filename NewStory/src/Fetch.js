import {useEffect, useState} from 'react'

export default function Fetch(){
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        const genres = fetchGenres();
            genres.then(data => {
            setList(data.works);
        });

        async function fetchGenres() {
                const get = await fetch(`https://openlibrary.org/subjects/love.json`);
                return get.json();
            }
            
    },[]);
    const Books = list.map(subject =>{
        return <li key={subject.key}>{subject.title}</li>
    }); 
    return (
        <ul>{Books}</ul>
    );
}
