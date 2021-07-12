// HMLHttpRequest method
const request = new XMLHttpRequest();
request.open("GET", "https://www.balldontlie.io/api/v1/teams");
request.send();
request.onload = () =>{
    console.log(request);
    if(request.status === 200){
        console.log(request.response);
    } else{
        console.log(`error ${request.status}`);
    }
}

// fetch api

