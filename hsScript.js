var storageHS = JSON.parse(localStorage.getItem("players"));
console.log(storageHS);
storageHS.forEach(function (i) {
    if(i.keyCode % 2 === 0) {
    var tar = document.createElement("tr");
    tar.setAttribute("style", "background-color:white")
    console.log("happening")
    highScoreTable.appendChild(tar);
    var hsinitials = document.createElement("td");
    hsinitials.textContent = i.initials;
    var hsscores = document.createElement("td");
    hsscores.textContent = i.score;
    tar.appendChild(hsinitials);
    tar.appendChild(hsscores);
    console.log(i.keyCode);
    } else {
        var tar = document.createElement("tr");
        tar.setAttribute("style", "background-color:grey")
        console.log("happening")
        highScoreTable.appendChild(tar);
        var hsinitials = document.createElement("td");
        hsinitials.textContent = i.initials;
        var hsscores = document.createElement("td");
        hsscores.textContent = i.score;
        tar.appendChild(hsinitials);
        tar.appendChild(hsscores);
        console.log(i.keyCode);
    }
});