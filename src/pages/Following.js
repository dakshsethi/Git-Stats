import React from 'react'
import UserCard from './UserCard'

export default class Following extends React.Component  {

    state = {
        loading: true,
        personal_access_token: localStorage.getItem('personal-access-token'),
        following: null
    }

    async componentDidMount() {
        document.title = 'Followers List';
        const url = "https://api.github.com/user/following";
        const auth = "token " + this.state.personal_access_token;
        const response = await fetch(url, {
              headers: {
                authorization: auth
              }
            }
        )
        const data = await response.json();
        this.setState({ loading: false });
        this.setState({ following: data });
    }

    render () {
        return (
            <div>
                {this.state.loading || !this.state.following ? ( 
                    <div>
                        Loading Following....
                    </div> 
                ) : (
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>{ this.state.following.map((o, i) => <UserCard user={o} key={i}/> )}</div>
                )}
            </div>
        )
    }
}