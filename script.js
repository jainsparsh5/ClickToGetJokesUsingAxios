const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getdadJokes();
    const newJoke = document.createElement('li');
    newJoke.append(jokeText);
    jokes.append(newJoke);
}
const getdadJokes = async () => {
    try{
        const config  ={headers : {Accept: 'application/json'}};
        const res = await axios.get("https://icanhazdadjoke.com/" , config);
        return res.data.joke;
    }catch(e){
        return "Oh no connection timed out"
    }
    
}

btn.addEventListener('click' , addNewJoke);







