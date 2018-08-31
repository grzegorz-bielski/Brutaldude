import * as React from "react";
import {loginUrl} from '../shared/urls'

interface IState {
    infoStatus: string; 
    loginCredentials: ILoginCredentials;
}

interface ILoginCredentials {
    password: string;
    username: string;
}

interface ILoginResponse {
    token: string;
}

class LoginComponent extends React.Component<{}> {
    public state: IState = {
        infoStatus: "",
        loginCredentials: {
            password: "",
            username:  "",
        }
    };

    public render() {
        return (
            <div className="control">
                <form onSubmit={this.handleSubmit}>
                    <input className="input is-focused" type="text" placeholder="Username" onChange={this.handleUsernameInput} value={this.state.loginCredentials.username}/>
                    <input className="input is-focused" type="password" placeholder="Password" onChange={this.handlePasswordInput} value={this.state.loginCredentials.password}/>
                    <button className="primary"> Submit </button>
                </form>
            </div>
        ); 
    }

    private handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({loginCredentials: {username: event.target.value, password: this.state.loginCredentials.password}});
    }

    private handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({loginCredentials: {password: event.target.value, username: this.state.loginCredentials.username}});
    }

    private handleSubmit = (event: React.KeyboardEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(
            loginUrl, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state.loginCredentials)}
        ).then( (response: Response) => response.json() )
        .then( (responseData: ILoginResponse) => {localStorage.setItem('JTW-Token', responseData.token)} )
        .catch( () => this.setState({infoStatus: 'error'}) )
        this.setState({loginCredentials: {username: "", password: ""}})
    }
}

export default LoginComponent;
