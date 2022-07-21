import Explore from './pages/Explore';
import Info from './pages/Info';
import Choice from './pages/Choice.js'
import Search from './pages/Search';
import PAGE from './Page';
import SelectionProvider from './functionalJS/Context';
import './App.css';
import { useState, Suspense} from 'react';
import ForOFor from './pages/ForOFor';

export default function App() {
  const [page, setPage] = useState(PAGE.HOME);

  function ChangePage(newPage){
    setPage(newPage);
  }
  const getPage = () => {
    switch (page) {
      case PAGE.FOROFOR:
        return <ForOFor changePage={ChangePage}/>
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
        <div id='NavBar'>
          <Search changePage={ChangePage} />
        </div>
        <Suspense fallback={<div>Loading...</div>}>{getPage()}</Suspense>
      </SelectionProvider>
    </div>
  );
}
