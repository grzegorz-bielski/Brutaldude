export interface IUser {
    name: string;
    id: number;
}

export interface IState {
    user: IUser
    activeTab: ITab | null
}

export interface ITab {
    content: string | JSX.Element
    name: string
}

export interface ICharacter {
    defense: number;
    health: number;
    id: number;
    name: string;
    owner: number;
    power: number;
    type: number;
}
