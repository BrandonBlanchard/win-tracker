import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './tab-container.css';

const tabMapper = (name, thisIndex, tabIndex, setTabIndex) => (
    <div className={ thisIndex === tabIndex ? 'tab-container__tab--active' : 'tab-container__tab' } 
         onClick={ () => setTabIndex(thisIndex)}
         key={thisIndex}>
    { name }</div>
);

const tabContentRenderer = (tabIndex, tabContent) => tabContent[tabIndex];

const TabContainer = (props) => {
    // Takes in children
    const [ tabIndex, setTabIndex] = useState(0);
    const { children, tabNames } = props;

    return (
        <div className='tab-container'>
            <div className='tab-container__tab-bar'>
                { tabNames.map((name, thisIndex) => tabMapper(name, thisIndex, tabIndex, setTabIndex)) }
            </div>    

            <div className='tab-container__tab-content'>
                { tabContentRenderer(tabIndex, children) }
            </div>
        </div>
    );
};

TabContainer.propTypes = {
    tabNames: PropTypes.arrayOf(PropTypes.string)
}

export { TabContainer };