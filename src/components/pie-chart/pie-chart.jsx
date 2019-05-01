import React from 'react';
import Plot from 'react-plotly.js';
import './pie-chart.css';

const PieChart = (props) => (
    <div className="pie-chart" style={{width: props.width, height: props.height }}>
        <Plot {...props} 
        configuration={{displayModBar: false }}
        layout={{ paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)', width: props.width, height: props.height, grid: { rows: 0, columns: 0}, showlegend: false }}></Plot>
    </div>
);

export default PieChart;