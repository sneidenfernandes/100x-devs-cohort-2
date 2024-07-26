function handleLogin(){
    // event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,password})

    })
    .then(response => response.json())
    .then(data=>{
        if(data.token){
            localStorage.setItem('token', data.token);
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

        }else{
            alert('Invalide credentials')
        }
    });
    
};

function handleLogout() {
    localStorage.removeItem('token');
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('app-container').style.display = 'none';


}

window.onload = function() {
    if(localStorage.getItem('token')){
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';

    fetch('http://localhost:3000/user', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }

    })
    .then(response => response.json())
    .then(data => {
        const username = data.username;
        displayWelcomemessage(username);
    })
    .catch(error => {
        console.error('Error fetching user data', error);
    });
     } //if 
}

function displayWelcomeMessage(username){
    document.getElementById('welcome-message').textContent = `${username}`;
}