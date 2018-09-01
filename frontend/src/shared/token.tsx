import { IUser } from '../main/interfaces';
import * as jwt_decode from 'jwt-decode';


export interface ITokenResponse {
    token: string;
}

export interface ITokenRequest {
    token: string | null
}

export interface ITokenData {
    username: string;
    user_id: number;
    emial: string;
    exp: string;
}

export const  getTokenValue = () => localStorage.getItem('JTW-Token')

export function getUserData(): IUser {
    const token: string | null = getTokenValue()
    if (token === null) {
        return { name: "", id: 0 }
    }
    const tokeData: ITokenData = jwt_decode(token);
    return { name: tokeData.username, id: tokeData.user_id }
}
