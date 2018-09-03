import * as React from 'react';

import { ICharacter } from '../main/interfaces'
import { charactersUrl } from './urls'
import { getTokenValue } from '../shared/token';


export class ListComponent extends React.Component<{}>{
    public state: {enemy: ICharacter}

    public render() {
        return (
            <div>
                Fight with {this.state.enemy}
            </div>
        )
    }

    public getHeaders = () => {
        const token: string | null = getTokenValue()
        return { 'Content-Type': 'application/json', 'Authorization':  `Bearer ${token}`}
    }

    public componentDidMount() {
        fetch(
            `${charactersUrl}/figth`, { method: 'GET', headers: this.getHeaders()}
        ).then((response: Response) => response.json()
        ).then((responseData: ICharacter[]) =>{ this.setState({elements: responseData.map((character, index ) => (       
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{character.id}</td>
                                    <td>{character.name}</td>
                                    <td>{character.power}</td>
                                    <td>{character.health}</td>
                                    <td>{character.defense}</td>
                                </tr>
                        )
                    )
                }     
            ) 
        }
        ).catch(() => null)
    }
}