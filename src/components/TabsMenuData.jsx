import React from 'react';

const Tabs = (props) => {  
  const { selectedTabId, tabsMenuList, onDragStart} = props;

//   console.log(selectedTabId, tabsMenuList, onDragStart)

  return (
    tabsMenuList[selectedTabId].map((tabObj, index) => {
        return ( <React.Fragment>
            <div className="blockelem noselect"  
                data={tabObj}
                id={index}
                key={tabObj.id}
                draggable="true"                
                onDragStart={(e) =>{onDragStart(e, tabObj)}}
                onDragOver={event => event.preventDefault()}
            >
                <input type="hidden" name='blockelemtype' className="blockelemtype" value="2" />
                <div className="grabme">
                    <img alt="" src={`assets/grabme.svg`} />
                </div>
                <div className="blockin">
                    <div className="blockico">
                        <span></span>
                        <img alt="" src={`assets/${tabObj.imageName}`} />
                    </div>
                    <div className="blocktext">
                        <p className="blocktitle">{tabObj.title}</p>
                        <p className="blockdesc">{tabObj.description}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>)
    })
  );
};

export default Tabs;