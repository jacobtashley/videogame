const searchUrl = '"https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games';
const apiKey = '2f1af495fb5fe7c49142d334d9c9c3e4'

$(watchForm());


function watchForm(){
    $('form').submit(event => {
    event.preventDefault();
    getGameInfo();
    })
}

function getGameInfo(){
    var myHeaders = new Headers();
    myHeaders.append("user-key", "2f1af495fb5fe7c49142d334d9c9c3e4");
    myHeaders.append("Accept", "application/json");

    var raw = "fields name,summary; search \"Battlefront 2\"; limit 50;\n";

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
    }
   
    fetch(searchUrl, requestOptions)
        .then(response => response.json())
        .then(jsondata => {
            console.log(jsondata)
    })

}