import React from 'react';


const DetailsDrawer = (props) => { 
    let { visible, handleDrawerClose, deleteBlocks } = props;  

    if(visible){
        return (
            <React.Fragment>
                <div id="propwrap" className="itson">
                    <div id="properties" className="expanded">
                        <div id="close" onClick={handleDrawerClose}>
                            <img alt="" src="assets/close.svg" />
                        </div>
                        <p id="header2">Properties</p>
                        <div id="propswitch">
                            <div id="dataprop">Data</div>
                            <div id="alertprop">Alerts</div>
                            <div id="logsprop">Logs</div>
                        </div>
                        <div id="proplist">
                            <p className="inputlabel">Select database</p>
                            <div className="dropme">Database 1 <img alt="" src="assets/dropdown.svg" /></div>
                            <p className="inputlabel">Check properties</p>
                            <div className="dropme">All<img alt="" src="assets/dropdown.svg" /></div>
                            <div className="checkus"><img alt="" src="assets/checkon.svg" /><p>Log on successful performance</p></div>
                            <div className="checkus"><img alt="" src="assets/checkoff.svg" /><p>Give priority to this block</p></div>
                        </div>
                        <div id="divisionthing"></div>
                        <div id="removeblock" onClick={deleteBlocks}>Delete canvas</div>
                    </div>
                </div>
            </React.Fragment>  
        );
    }else{
        return null;
    }
        
}
export default DetailsDrawer;