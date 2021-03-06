import { createContext, useContext, useReducer, useState} from "react";

const selectionContext = createContext(null);
const selectionDispatchContext = createContext(null);
const bookContext = createContext(null);
const setBookContext = createContext(null);


export default function SelectionProvider({children}){
    const [selection, dispatch] = useReducer(selectionReducer, allSelection);
    const [book, setBook] = useState('');
    return(
        <selectionContext.Provider value={selection}>
            <selectionDispatchContext.Provider value={dispatch}>
                <bookContext.Provider value={book}>
                    <setBookContext.Provider value={setBook}>
                        {children}
                    </setBookContext.Provider>
                </bookContext.Provider>
            </selectionDispatchContext.Provider>
        </selectionContext.Provider>
    );
}

export function useSelection(){
    return useContext(selectionContext);
}
export function useSelectionDispatch(){
    return useContext(selectionDispatchContext);
}
export function useBook(){
    return useContext(bookContext);
}
export function useSetBook(){
    return useContext(setBookContext);
}


function selectionReducer(selection, action){
    switch (action.type) {
        case "checked":
            return selection.map((sub) =>{
                if (sub.id === action.id) {
                    return{
                        ...sub,
                        checked: !sub.checked
                    };
                }else{
                    return sub;
                }
            });
        case "next":
            return(selection.map(item =>{
                if(item.id === action.id) {
                    return{...item,
                        data: action.data}; 
                }
                else{
                    return item;
                }
            }));
        
        default:{
            throw Error("Unknown action: " + action.type);
        }
            
    }
}

const allSelection = [
    {id:1,fetch:"arts.json",name:"Arts", data:[], checked: false},
    {id:2,fetch:"animals.json",name:"Animals", data:[], checked: false},
    {id:3,fetch:"fiction.json",name:"Fiction",data:[], checked: false},
    {id:4,fetch:"science&mathematics.json",name:"Science & Mathematics", data:[], checked: false},
    {id:5,fetch:"childrens.json",name:"Children stories", data:[], checked: false},
    {id:6,fetch:"biography.json",name:"Biographies",data:[], checked: false},
    {id:7,fetch:"socialsciences.json",name:"Social sciences",data:[], checked: false},
    {id:8,fetch:"textbooks.json",name:"Textbooks",data:[], checked: false}
];