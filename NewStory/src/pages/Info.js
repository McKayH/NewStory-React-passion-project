import {useBook} from '../functionalJS/Context';
import {fetchTitle } from '../functionalJS/fetching';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

export default function Info({changePage}) {
    const book = useBook();
    const [info, setInfo] = useState({
        details:{
        title:"",
        publish_year: [],
        publishers: [],
        author_name: [],
        subject: [],
        cover:''
    }});

    useEffect(()=>{
        const item = fetchTitle(book);
        item.then(data =>{
            const setting = data.docs[1];
            if (setting.publisher && setting.subject) {
                setInfo({
                    details:{
                    title: setting.title,
                    publish_year: setting.first_publish_year,
                    publishers: setting.publisher,
                    author_name: setting.author_name,
                    subject: setting.subject,
                    cover_key:setting.cover_edition_key,
                }});    
            }else if(!setting.subject || !setting.publisher){
                if(!setting.subject) {
                    setInfo({
                        details:{
                        title: setting.title,
                        publish_year: setting.first_publish_year,
                        publishers: setting.publisher,
                        author_name: setting.author_name,
                        subject:["No Info available"],
                        cover_key:setting.cover_edition_key,
                    }});
                }else{
                    setInfo({
                        details:{
                        title: setting.title,
                        publish_year: setting.first_publish_year,
                        publishers:["No Info available"],
                        author_name: setting.author_name,
                        subject: setting.subject,
                        cover_key:setting.cover_edition_key,
                    }});
                }
            }
        });
        
    },[]);
    console.log(info.details);
    
    return(<div className='InfoPage'>

        <Box sx={{ width: '100%', 
            backgroundColor: '#fff',
            border: '5px solid #283618',
            borderRadius: '10px'
        }}>
            <div className='imediateBookInfo'>
                <img className="bookCover" src={`https://covers.openlibrary.org/b/olid/${info.details.cover_key}-M.jpg`} alt="book cover"/>
                <ul className='listsStyle'>
                <li>{info.details.title}</li>
                <li>{info.details.author_name}</li>
                <li>{info.details.publish_year}</li>
                </ul>
            </div>
            <div className='extraInfo'>
                <h3>List of publishers</h3>
                <ul className='listStyle'>
                    {info.details.publishers.map((pub)=>{
                        return <li>{pub}</li>
                    })}
                </ul>
                <h3>List of subjects</h3>
                <ul className='listStyle'>
                    {info.details.subject.map((sub)=>{
                        return <li>{sub}</li>
                    })}
                </ul>
            </div>
          
        </Box>
    </div>)
}