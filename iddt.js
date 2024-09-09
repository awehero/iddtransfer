const inputString = prompt('Enter your JSON string:');

const transformedString = inputString
    .replace(/{"mapId":"|,"time":/g, '')
    .replace(/","count":/g, ',');

console.log(transformedString);
