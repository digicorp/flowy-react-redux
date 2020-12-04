import React from 'react';
import Tabs  from "./components/TabsMenuData";
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from './components/FooterComponent';
import './App.css';

let  tabsMenuList = {
    "triggers" : [
        {
            key:0,
            imageName: "eye.svg",
            title:"New visitor",
            description:"Triggers when somebody visits a specified page",
            descInDropArea: "When a <span>new visitor</span> goes to <span>site 1</span>",
            imagePathInDropArea: "eyeblue.svg"
        },
        {
            key:1,
            imageName: "action.svg",
            title:"Action is performed",
            description:"Triggers when somebody performs a specified action",
            descInDropArea: "When <span>Action1</span> is performed",
            imagePathInDropArea: "actionblue.svg"
        },
        {
            key: 2,
            imageName: "time.svg",
            title:"Time has passed",
            description:"Triggers after a specified amount of time",
            descInDropArea: "When <span>10 seconds</span> have passed",
            imagePathInDropArea: "timeblue.svg"
        },
        {
            key:3,
            imageName: "error.svg",
            title:"Error prompt",
            description:"Triggers when a specified error happens",
            descInDropArea: "When <span>Error 1</span> is triggered",
            imagePathInDropArea: "errorblue.svg"
        }                
    ],
    "actions" : [
        {
            key:0,
            imageName: "database.svg",
            title:"New database entry",
            description:"Adds a new entry to a specified database",
            descInDropArea: `Add <span>Data object</span> to <span>Database 1</span>`,
            imagePathInDropArea: "databaseorange.svg"
        },
        {
            key:1,
            imageName: "database.svg",
            title:"Update database",
            description:"Edits and deletes database entries and properties",
            descInDropArea: `Update <span>Database 1</span>`,
            imagePathInDropArea: "databaseorange.svg"
        },
        {
            key:2,
            imageName: "action.svg",
            title:"Perform an action",
            description:"Performs or edits a specified action",
            descInDropArea: `Perform <span>Action 1</span>`,
            imagePathInDropArea: "actionorange.svg"
        },
        {
            key:3,
            imageName: "twitter.svg",
            title:"Make a tweet",
            description:"Makes a tweet with a specified query",
            descInDropArea: "Tweet <span>Query1</span> with the account @digi-corp",
            imagePathInDropArea: "twitterorange.svg"
        },
    ],
    "loggers" : [
        {
            key:0,
            imageName: "log.svg",
            title:"Add new log entry",
            description:"Adds new log entry to the project",
            descInDropArea: "Add new <span>success</span>log entry",
            imagePathInDropArea: "logred.svg"
        },
        {
            key:1,
            imageName: "log.svg",
            title:"Update logs",
            description:"Edits and deletes log entries in this project",
            descInDropArea: "Edit <span>Log Entry 1</span>",
            imagePathInDropArea: "logred.svg"
        },
        {
            key:2,
            imageName: "error.svg",
            title:"Prompt an error",
            description:"Triggers a specified error",
            descInDropArea: "Trigger <span>Error 1</span>",
            imagePathInDropArea: "errorred.svg"
        }, 
    ]           
};
const tabsArray = [
    {
        key: 0,
        id: "triggers",
        name:"Trggers"
    },
    {
        key: 1,
        id: "actions",
        name:"Actions"
    },
    {
        key: 2,
        id: "loggers",
        name:"Loggers"
    }
]
const AppSilder = (props) => { 
        return (
            <React.Fragment>
                <HeaderComponent />
                <div id="leftcard">
                    <div id="closecard">
                        <img alt="" src="assets/closeleft.svg" />
                    </div>
                    <p id="header">Blocks</p>
                    <div id="search">
                        <img alt="" src="assets/search.svg" />
                        <input type="text" placeholder="Search blocks" />
                    </div>
                    <div id="subnav">
                        {tabsArray.map((tab, index) => {
                            return(<div id={tab.id} key={tab.key} className={`${tab.id === props.selectedTabId ? 'navactive' : 'navdisabled'} side`} onClick={()=>props.onTabClick(tab.id)}>{tab.name}</div>)
                        })}            
                        
                    </div>        
                    <Tabs 
                        {...this.state}
                        {...props}
                        selectedTabId={props.selectedTabId}
                        onDragStart={props.onDragStart}
                        key={'test-tabs'}
                        tabsMenuList={tabsMenuList}
                    />  
                    <FooterComponent />                
                </div>
            </React.Fragment>  
        );
}
export default AppSilder;