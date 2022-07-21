import PAGE from "../Page";
import { useBook } from "../functionalJS/Context";
export default function ForOFor({changePage}) {
    const book = useBook();
    return(
        <div className="ErrPage">
            <h1>404 Page not found</h1>
            <h4>{`You Searched For: ${book}`}</h4>
            <p>check your spelling if corect then the book is either not real or can't be acessed</p>
            <button  onClick={()=>{
                changePage(PAGE.HOME);
            }}>Home</button>
        </div>
    );
}