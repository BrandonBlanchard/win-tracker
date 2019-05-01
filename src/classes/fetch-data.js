import { stringify } from "querystring";


const fetchData = (url, dataReadyCB) => {
     return fetch(url).then(data => {
        data.text().then(data => formatData(data, dataReadyCB));
     }).catch(e => console.error('data fetch failed')) };

const formatData = (data, dataReadyCB) => {
   const lines = data.split('\n');

   // Take first row and split it into colmnNames
   const colNames = lines.shift().split(',');
   // Map line values to column names 
   dataReadyCB(lines.map(ln => 
      ln.split(',').reduce((acc, val, index) => {
         acc[colNames[index].toLowerCase()] = val;
         return acc;
      }, {})
   ));

}


export { fetchData }