import React from 'react'
import FollowerCard from './FollowerCard'

export default class Profile extends React.Component  {

    state = {
        loading: true,
        personal_access_token: localStorage.getItem('personal-access-token'),
        followers: null
    }

    async componentDidMount() {
        document.title = 'Followers List';
        const url = "https://api.github.com/user/followers";
        const auth = "token " + this.state.personal_access_token;
        const response = await fetch(url, {
              headers: {
                authorization: auth
              }
            }
        )
        const data = await response.json();
        this.setState({ loading: false });
        this.setState({ followers: data });
    }

    render () {
        return (
            <div>
                {this.state.loading || !this.state.followers ? ( 
                    <div>
                        Loading Followers....
                    </div> 
                ) : (
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>{ this.state.followers.map((o, i) => <FollowerCard follower={o} key={i}/> )}</div>
                )}
            </div>
        )
    }
}