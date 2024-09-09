const inputString = prompt('Enter your JSON string:');

const transformedString = inputString
    .replace(/{"mapId":"|","time":/g, '')  // Removes {"mapId":" and ","time":
    .replace(/","count":/g, ',');          // Replaces ","count": with ,

console.log(transformedString);
