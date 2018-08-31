import * as React from "react";

interface IState { 
    password: string;
    username: string;
}


class LoginComponent extends React.Component<{}> {
    public state: IState = {
        password: "", 
        username: ""
    };

    public render() {
        return (
            <div className="control">
            <form onSubmit={this.handleSubmit}>
            <input className="input is-focused" type="text" placeholder="Username" onChange={this.handleUsernameInput}/>
            <input className="input is-focused" type="password" placeholder="Password" onChange={this.handlePasswordInput}/>
            <button className="primary"> Submit </button>
            </form>
            </div>
        ); 
    }

    private handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({username: event.target.value});
    }

    private handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({password: event.target.value});
    }

    private handleSubmit = (event: React.KeyboardEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(this.state.password === "admin" && this.state.username === "admin"){
            console.log("Jestem Ściekiem");
        }
    }
}

export default LoginComponent;
