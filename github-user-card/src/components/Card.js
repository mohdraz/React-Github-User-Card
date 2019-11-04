import React from "react";

const Card = (props) => {

    const {name, avatar_url, followers, login, html_url,} = props.data;

    return (
        <>
            <div className="header" >
                <h1>My name is {name} </h1>
                <img src={avatar_url} alt={name} />
            </div>
            
            <div className="userInfo">
                <p>Username: {login} </p>
                <p>Github Link: <a href={html_url} target="_blank" rel="noopener noreferrer" > {html_url} </a> </p>
            </div>

            
            <div className="followers">
                <h2 className="secondary-heading" >My Followers</h2>
                <p>Number of Followers: {followers} </p>
                {props.followerData.map( follower => (
                    <div key={follower.id} className="followers__detail">
                        <p> {follower.login} </p>
                        <img src={follower.avatar_url} alt={follower.login} />
                        <p>Github Link:<a href={follower.html_url} target="_blank" rel="noopener noreferrer" > {follower.html_url} </a></p>
                    </div>
                ))}
            </div>
            <h2 className="secondary-heading">My Repos</h2>
            <div className="repos">
                {props.reposData.map(repo => (
                        <p key={repo.id} > <a href={repo.html_url} target="_blank" rel="noopener noreferrer" >{repo.name}</a> </p>
                ))}
            </div>
            
        </>
    );
};

export default Card;