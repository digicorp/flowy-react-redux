//Action creators

export const setClient= (evX, evY)=> {
    //return an action, plain js object
    return {
        type: "SET_CLIENT_COORD",
        payload: 
        {
        clientX:evX,
        clientY:evY
    }

    }
}

export const setDraggedElement= (draggedObj)=> {
    //return an action, plain js object
    return {
        type: "SET_DRAGGED_ELEMENT",
        payload: 
        {
            ...draggedObj
        }

    }
}

export const setPosition= (left, top)=>{
    var posObj= {left:left,
        top:top}
    console.log(">>>>from action", left, top)
    return{
        type: "SET_CARD_POSITION",
        payload: posObj
    }
    
}

export const setAddTask= (tasksArray)=>{
    console.log(">>>>from action",tasksArray)
    return{
        type: "ADD_TASK",
        payload: tasksArray
    }
}

export const drawerOpen= (id)=> {
    return {
        type:"OPEN_DRAWER",
        payload:{
            showDetailsDrawer:true,
            selectedElementId :id
        }
    }
}

export const drawerClose= ()=> {
    return {
        type:"CLOSE_DRAWER",
        payload:{
            showDetailsDrawer:false,
            selectedElementId :null
        }
    }
}

export const siderTabClick=(id)=>{
    return {
        type:"SELECT_SIDER",
        payload: id
    }
}

export const deleteBlocks= ()=> {
    return {
        type: "CLEAR_CANAVAS",
        payload:[]
    }
    
}

export const dragRemoveTask=(tasksArray)=>{
    return{
        type:"REMOVE TASK",
        payload: tasksArray
    }
}



