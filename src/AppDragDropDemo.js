import React, { Component } from 'react';

import './App.css';
import AppSilder from './AppSider';
import DetailsDrawer from "./components/DetailsDrawer";
import DragElement from "./components/DragElement";
import {connect} from "react-redux"
import {setPosition,setAddTask, setClient, setDraggedElement, drawerOpen, drawerClose, deleteBlocks,siderTabClick, dragRemoveTask } from "./actions"


let levelObj = {};

class AppDragDropDemo extends Component {
    createElement = (element, index) => {
        // console.log("element:::::::", element, this.state);
        return <DragElement
        handleParentChild={this.handleParentChild}
        {...this.props}
        // reDrag= {this.onReDrag}
        left={this.props.posObj.left||0} 
        top={this.props.posObj.top||0} 
        visible={this.props.drawerState.showDetailsDrawer} 
        id={index+1}
        selectedElementId={this.props.drawerState.selectedElementId}
        // source={element} 
        key={index} 
        handleDrawerOpen={this.props.drawerOpen}
        />;
    };

    handleParentChild = (parentElement) => {
        // draggedObj  // child element that is dragged
        let { draggedObj } = this.props;

        this.props.setDraggedElement({
            ...draggedObj,
            parent: parentElement.elementId, 
            level: parentElement.level + 1,   
        });
    }

    createElements=  (elements) =>{ 
        return elements.map((element, index)=>this.createElement(element, index));
    };

    onDragStart = (ev, draggedObj) => {
        this.props.setClient( ev.clientX,  ev.clientY );
        this.props.setDraggedElement(draggedObj);
    };

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    // onReDrag=(i)=>{
    //     console.log(">>>>>>>>>index", i)
    //     let tasksArray = [...this.props.tasksArray] 
    //     if (i> -1){
    //         tasksArray.splice(i,1)
    //     }
    //     this.props.dragRemoveTask(tasksArray)
    // }

    onDrop = (event, cat) => {
        // let id = ev.dataTransfer.getData("id");
        let tasksArray = [...this.props.tasksArray]  || [];

        //temp workaround::need to move level obj as state
        if (tasksArray.length===0){
            levelObj={}
        }
        // tasksArray.push(completed);
        this.props.setAddTask(tasksArray)

        // console.log('XXXX',event.clientX);
        // console.log('YYYY',event.clientY);
        const cardKeys = Object.keys(levelObj).length
        if(cardKeys === 0){
            levelObj[`${cardKeys}`] = {
                elementId : cardKeys,
                leftStart:event.clientX,
                leftEnd:event.clientX + 318, // 318 card length
                topStart:event.clientY + 120, // "222px",
                topEnd: event.clientY + 120 + 82,//  "272px",
                parent: 0,
                top:event.clientY,
                left:event.clientX,
                level: 0,                
            }
            // tasksArray.push(levelObj['0']);
            
            const draggedObj ={
                ...this.props.draggedObj,
                ...levelObj['0'] 
            }
            tasksArray.push(draggedObj);

            // console.log("if",levelObj )
            this.props.setAddTask(tasksArray)
        }else {
            // console.log(">>>>checkingIndexCardKeys", cardKeys)
            levelObj[`${cardKeys}`] = {
                elementId : cardKeys,
                leftStart:levelObj[cardKeys-1].leftStart,
                leftEnd:levelObj[cardKeys-1].leftEnd + 318, 
                topStart:levelObj[cardKeys-1].topStart + 120, 
                topEnd: levelObj[cardKeys-1].topEnd +120+82,
                parent: cardKeys-1,
                top:levelObj[cardKeys-1].topEnd,
                left:levelObj[cardKeys-1].left,
                // parent: cardKeys-1, // parent's element's id
                // level:cardKeys,        //     parent +1   
            }

            // tasksArray.push(levelObj[cardKeys]); 
            
            const draggedObj ={
                ...this.props.draggedObj,
                ...levelObj[cardKeys] 
            }
            // console.log("draggedObj on DRop",draggedObj );

            tasksArray.push(draggedObj);

            this.props.setAddTask(tasksArray)
        }
        // if (event.target.id) {
        //     event.dataTransfer.getData("text");
        //     event.dataTransfer.clearData();
        // }       
       
        // const clientRect = event.currentTarget.getBoundingClientRect();
        // console.log("clientRect>>", clientRect)
        
        // const { clientX, clientY } = this.state;
        // console.log("clientRect.left ,event.clientX ,clientX>>>>>>>>>>>", clientRect.left ,event.clientX ,clientX, clientRect.left + event.clientX - clientX);
        // console.log("clientRect.top + event.clientY - clientY>>>>>>>>>",clientRect.top , event.clientY , clientY,     clientRect.top + event.clientY - clientY);
        this.props.setPosition(
            event.clientX, event.clientY
            // clientRect.left + event.clientX - clientX,
            // clientRect.top + event.clientY - clientY
        );
        event.preventDefault();
    }
   
    render() {
        console.log("props",this.props)
        return (
            <React.Fragment>
                <AppSilder 
                    {...this.state}
                    onDragStart={this.onDragStart}
                    setClient={this.props.setClient}
                    setDraggedElement={this.props.setDraggedElement}
                    onDrop={this.onDrop}
                    onTabClick= {this.props.siderTabClick}
                    selectedTabId={this.props.selectedTabId}
                    selectedElementId={this.props.drawerState.selectedElementId||null}
                    handleTaskAdd={this.props.setAddTask}
                    // handleDrawerClose={this.handleDrawerClose}
                />
                <DetailsDrawer
                    selectedElementId={this.props.drawerState.selectedElementId||null}
                    visible={this.props.drawerState.showDetailsDrawer||false} 
                    handleDrawerOpen={this.props.drawerOpen} 
                    handleDrawerClose={this.props.drawerClose}
                    deleteBlocks={this.props.deleteBlocks}
                />
                <div id="canvas"
                    className="droppable" 
                    onDragOver={(e)=> e.preventDefault()}
                    onDrop={(e)=>this.onDrop(e, "complete")}
                    >
                    {
                    this.props.tasksArray
                    && this.props.tasksArray.length > 0 
                    && this.createElements(this.props.tasksArray)
                    }

                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps= (state)=> {
    // console.log(state)
    return {
        coordinates: state.coordinates,
        draggedObj: state.draggedObj,
        initState: state.initState,
        posObj: state.posObj,
        tasksArray: state.tasksArray,
        // clientX: state.coordinates.clientX, 
        // clientY:state.coordinates.clientY,
        drawerState:state.drawerState,
        selectedTabId: state.selectedTabId
        
        

    }

}

export default connect(mapStateToProps, 
    {setPosition, 
    setAddTask, 
    setClient,
    setDraggedElement, 
    drawerOpen, 
    drawerClose,
    deleteBlocks,
    dragRemoveTask,
    siderTabClick
})(AppDragDropDemo)