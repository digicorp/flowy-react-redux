import React from 'react';
import ArrowElement from './ArrowElement';


const DragElement = (props) => {  
  const { tasksArray, visible , selectedElementId, handleDrawerOpen,  handleParentChild} = props;
  console.log("tasksArray >>>>", tasksArray)   
  
  return (
    <div >
    {tasksArray.map((singleElement, index) => {
      return ( <React.Fragment  >
          {console.log("singleElement", singleElement, index)}
              <div
              key={index}
              // draggable="true"
              // onDragEnter={(event) => {console.log(event); } }
              onDragEnter={(event) => {
                // console.log(">>>>event::::",event)
                // console.log("currentTarget :::::", event.currentTarget); // returns the parent element
                // console.log("relatedTarget :::::", event.relatedTarget);
                // // event.currentTarget.style.boxShadow = "0px 4px 30px rgba(101, 101, 220, 0.5)";
                handleParentChild(singleElement)
              }}
               
              className={`blockelem noselect block ${(visible === true && selectedElementId === singleElement.elementId) ? "selectedblock" : ""}`}
              style={{
                'position':'absolute', 
                'left': `${singleElement.left}px`,
                'top': `${singleElement.top}px`
              }}
              // onDragOver={event => event.preventDefault()}
              >
                <ArrowElement />
                  <input type="hidden" name="blockelemtype" className="blockelemtype" value="1" />
                  <input type="hidden" name="blockelemtype" className="blockelemtype" value="1" id={singleElement.elementId} />
                  <input type="hidden" name="blockid" className="blockid" value="0" />
                  <div className="blockyleft">
                      <img src={`assets/${singleElement.imagePathInDropArea}`} alt=""/>
                      <p className="blockyname">{singleElement.title}</p>
                  </div>
                  <div className="blockyright" onClick={() =>handleDrawerOpen(singleElement.elementId)}>
                      <img src="assets/more.svg" alt=""/>
                  </div>
                  <div className="blockydiv"></div>
                  <div className="blockyinfo" dangerouslySetInnerHTML={{__html: singleElement.descInDropArea}}></div>
                  {/* <div class="indicator" style={{'left':`${singleElement.left/5}px`, 'top':`${singleElement.top -10}px`}}></div> */}
                  
              </div>
          </React.Fragment>)
    })}
   </div>
  );
};

export default DragElement;