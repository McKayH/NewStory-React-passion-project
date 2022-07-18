import Explore from './pages/Explore';
import PAGE from './Page';
import Choice from './pages/Choice.js'
import SelectionProvider from './functionalJS/Context';
import './App.css';
import { useState, Suspense} from 'react';

export default function App() {
  const [page, setPage] = useState(PAGE.HOME);

  function ChangePage(newPage){
    setPage(newPage);
    // window.history.pushState({page: newPage}, '', newPage);
  }
  const getPage = () => {
    switch (page) {
      case PAGE.EXPLORE:
        return <Explore />;
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
