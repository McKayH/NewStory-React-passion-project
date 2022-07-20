import Explore from './pages/Explore';
import Info from './pages/Info';
import PAGE from './Page';
import Choice from './pages/Choice.js'
import SelectionProvider from './functionalJS/Context';
import './App.css';
import { useState, Suspense} from 'react';

export default function App() {
  const [page, setPage] = useState(PAGE.HOME);

  function ChangePage(newPage){
    setPage(newPage);
  }
  const getPage = () => {
    switch (page) {
      case PAGE.INFO:
        return <Info changePage={ChangePage}/>
      case PAGE.EXPLORE:
        return <Explore changePage={ChangePage}/>;
      case PAGE.HOME:
        default:
          return  <Choice changePage={ChangePage}/>;        
    }
  }
  return(
    <div className="App">
      <SelectionProvider>
        <Suspense fallback={<div>Loading...</div>}>{getPage()}</Suspense>
      </SelectionProvider>
    </div>
  );
}
