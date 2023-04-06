import React from "react";
import './Header.css';

const Header = props => {

    return (
        <React.Fragment>
            <div className="header">
                <div className="upperSide">
                    <h1>React Meal</h1>
                    <div className="Cart"><h5>Your Cart</h5>
                        <h5 id="h5">0</h5>                    
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;