function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        document.querySelector("#dog-image").src = data.message;
    })
}

function getSpecificDog(){
    let breed = document.querySelector("#breed").value;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then((res) => {
        if (!res.ok) {
            //an error has happened
            alert("Woof, we couldn't find that dog :( Try again");
            return;
        }
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        document.querySelector("#dog-image").src = data.message;
    })
}