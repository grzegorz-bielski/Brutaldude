import * as React from "react";

import { charactersUrl } from './urls'
import { getTokenValue } from "../shared/token";

interface ICharacterCreate {
    defense: number | string;
    health: number | string;
    name: string;
    power: number | string;
    type: number | string;
}


export class CreateComponent extends React.Component<{}> {
    public state: ICharacterCreate = {name: "", health: "", defense: "", power: "", type: ""}

    public render() {
        console.log(this.state)
        return (
            <div className="control">
                <form onSubmit={this.handleSubmit}>
                    <input className="input is-focused" type="text" placeholder="name" onChange={this.handleName} value={this.state.name} />
                    <input className="input is-focused" type="text" placeholder="defense" onChange={this.handleDefence} value={this.state.defense} />
                    <input className="input is-focused" type="text" placeholder="health" onChange={this.handleHealth} value={this.state.health} />
                    <input className="input is-focused" type="text" placeholder="power" onChange={this.handlePower} value={this.state.power} />
                    <input className="input is-focused" type="text" placeholder="type" onChange={this.handleType} value={this.state.type} />
                    <button className="button is-primary is-rounded"> Submit </button>
                </form>
            </div>
        );
    }

    public handleName = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({name: event.target.value})
    public handleDefence = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({defense: event.target.value})
    public handleHealth = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({health: event.target.value})
    public handlePower = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({power: event.target.value})
    public handleType = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({type: event.target.value})

    public getHeaders = () => {
        const token: string | null = getTokenValue()
        return { 'Content-Type': 'application/json', 'Authorization':  `Bearer ${token}`}
    }

    public handleSubmit = (event: React.KeyboardEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(
            charactersUrl, { method: 'POST', headers: this.getHeaders(), body: JSON.stringify(this.state) }
        ).then((response: Response) => response.json())
        .catch(() => this.setState({ infoStatus: 'error', authenticated: false }))
        this.setState({name: "", health: "", defence: "", power: "", type: ""})
        
    }
}
