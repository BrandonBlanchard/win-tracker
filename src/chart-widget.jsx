import React from 'react';
import './styles/chart-widget.css';

export default function (props) {
    return (
        <div className="chart-widget">
            <h3 className="chart-widget__name">{props.chartName}</h3>
            {props.children}
        </div>
    );
}