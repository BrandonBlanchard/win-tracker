import { stringify } from "querystring";


const fetchData = (url, dataReadyCB) => {
     fetch(url).then(data => {
        data.text().then(data => formatData(data, dataReadyCB));
     }).catch(e => console.error('data fetch failed')) };

const formatData = (data, dataReadyCB) => {
   const lines = data.split('\n');
   const formattedData = [];

   for(let i = 0; i < lines.length; i++) {
      const line = lines[i].split(',');

      let emptyCols = line.reduce((acc, col) => {
         if(col === '' || col === null || col === undefined) { acc += 1;}
         return acc;          
      }, 0);

      if(emptyCols > 4) {
         continue;
      }

      if(i > 0) {
         formattedData.push({
            player: line[0],
            faction: line[1],
            caster: line[2],
            theme: line[3],
            opponent: line[4],
            opponentFaction: line[5],
            opponentTheme: line[6],
            opponentCaster: line[7],
            outcome: !!line[8] ? 'win' : 'lose',
            winCondition: line[9],
            controlPoints: line[10],
            opponentControlPoints: line[11]
         });

         formattedData.push({
            player: line[4],
            faction: line[5],
            caster: line[7],
            theme: line[6],
            opponent: line[0],
            opponentFaction: line[1],
            opponentTheme: line[3],
            opponentCaster: line[2],
            outcome: !line[8] ? 'win' : 'lose',
            winCondition: line[9],
            controlPoints: line[11],
            opponentControlPoints: line[10]
         });
      }
   }

   dataReadyCB(formattedData);
}


export { fetchData }