import React from 'react';
import './chart-card.css';

export default function (props) {
    return (
        <div className="chart-card">
            <div className="chart-card__content">
                <h3 className="chart-card__name">{props.chartName}</h3>
                {props.children}
            </div>
        </div>
    );
}