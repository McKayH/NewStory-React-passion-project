import {useEffect, useState} from 'react';
import PAGE from '../Page';
import { useSelection, useSelectionDispatch, useSetBook} from '../functionalJS/Context';
import { fetchBooks } from '../functionalJS/fetching';
import Box from '@mui/material/Box';



export default function Explore({changePage}){
  const select = useSelection(); 
  const dispatch = useSelectionDispatch();
  const setTitle = useSetBook();
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

  const nextPage = (e =>{
      setPage(page + 12);
  });
  const handleSelect = ((e) =>{
      setTitle(e.target.title);
      changePage(PAGE.INFO);
  });
  return (
    <div className='ExplorePage'>

        <Box sx={{ width: '100%', 
            backgroundColor: '#fff',
            border: '5px solid #283618',
            borderRadius: '10px'
        }}>
          <button onClick={()=>{
            changePage(PAGE.HOME)
          }}>Home</button>
          {select.map(obj => {
            if (obj.checked) {
              return(
                <div key={obj.id}>
                  <h3>{obj.name}</h3>
                  <ul className='listsStyle'>{obj.data.map(item =>{
                    return <li id={item.title} className='hoverStyle'><span onClick={handleSelect} title={item.title}>{item.title}</span></li>
                  })}</ul>
                </div>)
              
            }
            else{
              return null;
            }
          })}
        
        <button onClick={nextPage}>Next Page</button>
        </Box>
    </div>
  );
}
