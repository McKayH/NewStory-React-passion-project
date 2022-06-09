import Fetch from './Fetch';
import PAGE from './Page';
import './App.css';
import { useState, Suspense } from 'react';

export default function App() {
  const [page, setPage] = useState(PAGE.HOME);

  function handleSetPage(newPage){
    setPage(newPage);
    window.history.pushState({page: newPage}, '', newPage);
  }
  const getPage = () => {
    switch (page) {
      case PAGE.HOME:
        default:
        return  <Fetch />
        
    }
  }
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>{getPage()}</Suspense>
    </div>
  );
}
