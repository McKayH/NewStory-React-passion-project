import { createContext, useContext, useReducer} from "react";

const selectionContext = createContext(null);
const selectionDispatchContext = createContext(null);


export default function SelectionProvider({children}){
    const [selection, dispatch] = useReducer(selectionReducer, allSelection);

    return(
        <selectionContext.Provider value={selection}>
            <selectionDispatchContext.Provider value={dispatch}>
                {children}
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
    
        default:{
            throw Error("Unknown action: " + action.type);
        }
            
    }
}
const allSelection = [
    {id:1,fetch:"",name:"Arts", checked: false},
    {id:2,fetch:"",name:"Animals", checked: false},
    {id:3,fetch:"",name:"Fiction", checked: false},
    {id:4,fetch:"",name:"Science & Mathematics", checked: false},
    {id:5,fetch:"",name:"Biusness & Finsnce", checked: false},
    {id:6,fetch:"",name:"Children stories", checked: false},
    {id:7,fetch:"",name:"History", checked: false},
    {id:8,fetch:"",name:"Health & Wellnes", checked: false},
    {id:9,fetch:"",name:"Biographies", checked: false},
    {id:10,fetch:"",name:"Social sciences", checked: false},
    {id:11,fetch:"",name:"Textbooks", checked: false}
];