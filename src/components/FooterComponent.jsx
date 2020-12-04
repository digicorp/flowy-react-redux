import React from 'react';
import '../App.css';

const FooterComponent = (props) => {  
    return (
        <div id="footer">
            <a href="https://digi-corp.com" rel="noopener noreferrer" target="_blank">GitHub</a>
            <span>·</span>
            <a href="https://digi-corp.com" rel="noopener noreferrer" target="_blank">Twitter</a>
            <span>·</span>
                <a href="https://digi-corp.com" rel="noopener noreferrer" target="_blank"><p>Made with</p><img alt="" src="assets/heart.svg" /><p>by</p> Digicorp</a>
        </div>
    )
};

export default FooterComponent;