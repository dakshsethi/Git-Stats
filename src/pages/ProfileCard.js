import React from 'react'

const ProfileCard = (props) => {
    return (
        <div>    
            <div className="card">
                <div className="banner">
                    <img src={props.profile.avatar_url} className="profile_photo" />
                </div>
                <h2 className="name">{props.profile.name}</h2>
                <div className="title">
                    @{props.profile.login}
                    <br />
                    {props.profile.bio}
                </div>
                <div className="actions">
                    <div className="follow-info">
                        <h2><a href="/followers"><span>{props.profile.followers}</span><small>Followers</small></a></h2>
                        <h2><a href="/following"><span>{props.profile.following}</span><small>Following</small></a></h2>
                        <h2><a href="/public_repo"><span>{props.profile.public_repos}</span><small>Public Repos</small></a></h2>
                        <h2><a href="/private_repo"><span>{props.profile.total_private_repos}</span><small>Private Repos</small></a></h2>
                    </div>
                    <a href={props.profile.html_url} className="follow-btn">
                    <button>Visit Profile</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
