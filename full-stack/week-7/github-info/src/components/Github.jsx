
import {useState,useEffect} from 'react';
import './Github.css'
import githubLogo from './githubicon.png';



export default function GithubInfo(){


    const [username,setUsername] = useState("----");
    const [name,setName] = useState("---");
    const [profilePic,setProifilePic] = useState('https://avatars.githubusercontent.com/u/131291500?v=4');
    const [followers,setFollowers] = useState(0);
    const [following,setFollowing] = useState(0);
    const [publicRepositories, setPublicRepositories] = useState(0);


    async function getStats(username){
        const url = `https://api.github.com/users/${username}`;
    
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.log('Request unsuccessful.');
                return null; // Return null or handle the error accordingly.
            }
    
            const json = await response.json();
            return json;

        } catch (error) {
            console.error(error.message);
            return null;
        }
    }




    async function handleClick(){
        
        const data = await getStats(username)
        if(data){

            setName(data.name || 'N/A');
            setFollowers(data.followers);
            setFollowing(data.following);
            setProifilePic(data.avatar_url);
            setPublicRepositories(data.public_repos)


        }

        console.log('click works.')
    }


    
    return (
        <div className='page'>
            <div>
            <input className='input-box' type='text' placeholder='Enter username' onChange={
                (e)=> {
                    console.log(username)
                    return setUsername(e.target.value)}
                
            }></input>
            <button className='get-stats-button' onClick={handleClick}>Get stats</button>
            </div>
            <div className='card'>
                <img className='github-icon' src={githubLogo}></img><br></br>
                <img className='profile-pic' src={profilePic}></img>
                <p className='field-tag'>Name:</p>
                <p className='field-data'>{name}</p>
                <p className='field-tag'>Followers:</p>
                <p className='field-data'>{followers}</p>
                <p className='field-tag'>Following:</p>
                <p className='field-data'>{following}</p>
                <p className='field-tag'>Public Repositories:</p>
                <p className='field-data'>{publicRepositories}</p>
            </div>
        </div>
    )
}