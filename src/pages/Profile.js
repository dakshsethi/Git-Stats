import React from 'react'
import ProfileCard from './ProfileCard';

export default class Profile extends React.Component  {

    state = {
        loading: true,
        personal_access_token: localStorage.getItem('personal-access-token'),
        profile: null
    }

    async componentDidMount() {
        document.title = 'Profile Page';
        const url = "https://api.github.com/user";
        const auth = "token " + this.state.personal_access_token;
        const response = await fetch(url, {
              headers: {
                authorization: auth
              }
            }
        )
        const data = await response.json();
        this.setState({ loading: false });
        this.setState({ profile: data });
    }

    render () {
        return (
            <div>
                {this.state.loading || !this.state.profile ? ( 
                    <div>
                        Loading Profile....
                    </div> 
                ) : ( 
                    <div>
                        <ProfileCard profile={this.state.profile} />
                    </div>
                )}
            </div>
        )
    }
}