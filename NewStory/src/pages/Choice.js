import { useSelection, useSelectionDispatch} from '../functionalJS/Context';
import PAGE from '../Page'
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function Choice({changePage}) {
    const selection = useSelection();
    const dispatch = useSelectionDispatch();
    const handleChange = (event) => {
    dispatch({
        type:"checked",
        id: Number(event.target.id),
        checked: event.target.checked
    });
  };
  return (
        <Paper elivation={3}>
            <h1>Pick subjects to look at</h1>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    {selection.map((sub)=>{
                           return( <FormControlLabel
                           key={sub.id}
                            control={
                            <Checkbox checked={sub.checked} onChange={handleChange} id={sub.id.toString()}/>
                            }
                            label={sub.name}
                            />)
                        })
                    }
                </FormGroup>
                <button onClick={()=>{changePage(PAGE.EXPLORE)}}>Explore</button>
                <FormHelperText>Pick your intrests</FormHelperText>
            </FormControl>
        </Paper>
  );
}
