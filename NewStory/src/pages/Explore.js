import {useEffect, useState} from 'react'
import { useSelection, useSelectionDispatch} from '../functionalJS/Context';
import { fetchBooks } from '../functionalJS/fetching';
import Box from '@mui/material/Box';



export default function Explore(){
    const select = useSelection(); 
    const dispatch = useSelectionDispatch();
    const [page, setPage] = useState(0);
    
    useEffect(()=>{
        select.forEach((sub)=>{
            if (sub.checked){
                const recive = fetchBooks(sub.fetch, page);
                recive.then(data =>{
                    dispatch({
                        type: "next",
                        id: sub.id,
                        data: data.works,
                    });
                });
            }
          });
        },[page]); 
        console.log(select);
    const nextPage = (e =>{
        setPage(page + 12);
    });
  return (
    <div className='ExplorePage'>

        <Box sx={{ width: '100%', 
            backgroundColor: '#fff',
            border: '5px solid #283618',
            borderRadius: '10px'
        }}>
        
        <button onClick={nextPage}>Next Page</button>
        </Box>
    </div>
  );
}
