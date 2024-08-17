async function getData(username){
    const url = `https://api.github/users/${username}`

    try{
        const response = await fetch(url);
        if(!response.ok){
            console.log('Request unsucessful.')
        }

        const json = await response.json();
        console.log(json);
    } catch(error){
        console.error(error.message);
    }
}

