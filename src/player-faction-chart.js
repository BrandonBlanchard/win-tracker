import React from 'react';
import Plot from 'react-plotly.js';

const PlayerFactionChart = (props) => (
    <div className='player-faction'>
        <Plot {...props} layout={{ paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)', width: props.width, height: props.height, grid: { rows: 0, columns: 0}, showlegend: false }}></Plot>
    </div>
);

export {
    PlayerFactionChart
}
