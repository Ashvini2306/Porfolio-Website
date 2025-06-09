import React from 'react';
import './background.css'; // You'll need to create this CSS file

const Background = ({ children }) => {
    return (
        <div className="background-container">
            {/* Optional animated background elements */}
            <div className="particles"></div>
            <div className="gradient-overlay"></div>

            {/* Content that will appear on top of the background */}
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Background;