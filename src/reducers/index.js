import {combineReducers} from 'redux'

//Define Reducers

const clientCoordReducer= (coordinates= null, action)=> {

    if(action.type=== "SET_CLIENT_COORD"){
        return action.payload

    }
    return coordinates


}

const draggedElementReducer= (draggedObj= {}, action)=> {

    if(action.type=== "SET_DRAGGED_ELEMENT"){
        return action.payload

    }
    return draggedObj


}

const siderReducer= (selectedTabID= "triggers", action)=> {
    if (action.type==="SELECT_SIDER"){
        return action.payload
    }
    return selectedTabID
}

const cardPositionReducer= (posObj=null, action)=> {
    
    if (action.type=== "SET_CARD_POSITION"){
        console.log(action.payload)
        return action.payload
    }
    return posObj
}

const taskReducer= (tasksArray= [], action)=> {
    if (action.type=== "ADD_TASK"){  
        return action.payload
    }
    if (action.type== "CLEAR_CANAVAS"){
        return action.payload
    }
    if (action.type=="REMOVE_TASK"){
        console.log(action.payload)
        return action.payload
    }
    return tasksArray
}

// const clientReducer= (evX=null, evY=null, action)=> {
//     if (action.type== "SET_CLIENT_COORD"){
//         return action.payload
//     }
//     return evX,evY

// }

const drawerReducer=(drawerState={showDetailsDrawer:false,selectedElementId:null,},action)=>{
    if (action.type=="OPEN_DRAWER"){
        return action.payload
    }
    if(action.type== "CLOSE_DRAWER"){
        return action.payload
    }
    return drawerState
}

const initialStateReducer= () => {
    return {
        showDetailsDrawer:false,
        selectedElementId:null,
        tasksArray:[],
        left: 0,
        top: 0,
        clientX: 0,
        clientY: 0,
        // below state variables not used yet.
        tasks: [
            {name:"New Visitor", description:"Triggers when somebody performs a specified page",category:"wip", bgcolor: "White"},
            {name:"Action is performed", description:"Triggers after specified amount of time",category:"wip", bgcolor: "White"},
            {name:"Time has passed", description:"Triggers when somebody visits a specified page",category:"wip", bgcolor: "White"},
            {name:"Error prompt", description:"Triggers when specified error happens",category:"wip", bgcolor: "White"},            
        ],
        initialTaskText: [
            {
                title:"",
                imagePath:"",
                alt:"",
                description:"",
                tabId:"",                
            }
        ],
        finalTaskText: [
            {name:"New Visitor", description:"Triggers when somebody performs a specified page",category:"wip", bgcolor: "White"},
            {name:"Action is performed", description:"Triggers after specified amount of time",category:"wip", bgcolor: "White"},
            {name:"Time has passed", description:"Triggers when somebody visits a specified page",category:"wip", bgcolor: "White"},
            {name:"Error prompt", description:"Triggers when specified error happens",category:"wip", bgcolor: "White"},
        ]
    }
}

export default combineReducers({
    coordinates:  clientCoordReducer,
    draggedObj:  draggedElementReducer,
    tasksArray: taskReducer,
    initState: initialStateReducer,
    posObj: cardPositionReducer,
    // clientX: clientReducer.evX,
    // clientY: clientReducer.evY,
    drawerState:drawerReducer,
    selectedTabId: siderReducer
    
    
})