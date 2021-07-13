import React from 'react'

export default class UserCard extends React.Component  {

    state = {
        loading: true,
        profile: null
    }

    async componentDidMount() {
        const url = this.props.user.url;
        const response = await fetch(url)
        const data = await response.json();
        this.setState({ loading: false });
        this.setState({ profile: data });
    }

    render () {
        return (
            <div>
                {this.state.loading || !this.state.profile ? ( 
                    <div className="follower-card">
                        Loading Follower....
                    </div> 
                ) : (
                    <div className="follower-card"> 
                        <div className="banner left">
                            <img src={this.props.user.avatar_url} alt="GitHub Profile" className="profile_photo" />
                        </div>
                        <div className="banner right">
                            <div className="name">{this.state.profile.name}</div>
                            <span><small>@{this.props.user.login}</small></span>
                            <div className="title">
                                {this.state.profile.bio}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}