import {useBook} from '../functionalJS/Context';
import {fetchTitle } from '../functionalJS/fetching';
import PAGE from '../Page';
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
        subjects: [],
        cover:''
    }});

    useEffect(()=>{
        const item = fetchTitle(book);
        item.then(data =>{
            const setting = data.docs[1];
            if (!setting) {
                changePage(PAGE.FOROFOR)
            }else{
                setInfo({
                    details:{
                    title: setting.title,
                    publish_year: setting.first_publish_year,
                    publishers: setting.publisher,
                    author_name: setting.author_name,
                    subjects: setting.subject,
                    cover_key:setting.cover_edition_key,
                }});    
            }
        });
        console.log('hi');
    },[book]);
    
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
                {info.details.publishers ? (
                <ul className='listsStyle'>
                    {info.details.publishers.map((pub)=>{ 
                    return <li>{pub}</li>
                    })}
                </ul>):(<h3>not available</h3>)}
                    
                
                <h3>List of subjects</h3>
                {info.details.subjects ? (
                <ul className='listsStyle'>
                    {info.details.subjects.map((sub)=>{ 
                    return <li>{sub}</li>
                    })}
                </ul>):(<h3>not available</h3>)}
            </div>
          <button onClick={()=>{
              changePage(PAGE.HOME)
          }}>Home</button>
        </Box>
    </div>)
}