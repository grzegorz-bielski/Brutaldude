import * as React from "react";
import { history } from '../App'

import { loginUrl, verifyUrl } from '../shared/urls';
import { ITokenResponse, getTokenValue } from '../shared/token'

export interface IState {
    authenticated: boolean;
    infoStatus: string;
    loginCredentials: ILoginCredentials;
}

interface ILoginCredentials {
    password: string;
    username: string;
}

export class LoginComponent extends React.Component<{}> {
    public state: IState = {
        authenticated: false,
        infoStatus: "",
        loginCredentials: {
            password: "",
            username: "",
        }
    };

    public componentDidMount() {
        if (getTokenValue() === null) { return };
        this.VerifyToken();
        if (this.state.authenticated) {
            history.push('/main');
        }
    }

    public render() {
        return (
            <div className="control">
                <form onSubmit={this.handleSubmit}>
                    <input className="input is-focused" type="text" placeholder="Username" onChange={this.handleUsernameInput} value={this.state.loginCredentials.username} />
                    <input className="input is-focused" type="password" placeholder="Password" onChange={this.handlePasswordInput} value={this.state.loginCredentials.password} />
                    <button className="button is-primary is-rounded"> Submit </button>
                </form>
            </div>
        );
    }

    private VerifyToken = () => {
        fetch(
            verifyUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: getTokenValue() }) }
        ).then((response: Response) => response.json()
        ).then((responseData: ITokenResponse) => { this.setState({ authenticated: true })}
        ).catch(() => { this.setState({ authenticated: false })})
    }

    private handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ loginCredentials: { username: event.target.value, password: this.state.loginCredentials.password } });
    }

    private handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ loginCredentials: { password: event.target.value, username: this.state.loginCredentials.username } });
    }

    private handleSubmit = (event: React.KeyboardEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(
            loginUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.loginCredentials) }
        ).then((response: Response) => response.json())
            .then((responseData: ITokenResponse) => {
                localStorage.setItem('JWT-Token', responseData.token);
                this.setState({ authenticated: true })
                history.push('/main');
            })
            .catch(() => this.setState({ infoStatus: 'error', authenticated: false }))
        this.setState({ loginCredentials: { username: "", password: "" } })
    }
}
