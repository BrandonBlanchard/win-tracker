

const fetchData = (url, dataReadyCB) => {
     fetch(url).then(data => {
        data.text().then(data => formatData(data, dataReadyCB));
     }).catch(e => console.error('data fetch failed')) };

const formatData = (data, dataReadCB) => {
   dataReadCB(data.split('\n').map(gameMapper));
}

const gameMapper = (line) => {
    return line.split();
}

export { fetchData }