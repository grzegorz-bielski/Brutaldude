export interface IUser {
    name: string;
    id: number;
}

export interface IState {
    user: IUser
    activeTab: ITab
}

export interface ITab {
    content: React.Component | string
    name: string
}