import * as React from 'react';
import { ITab } from './interfaces';

import { ListComponent } from '../list/list'
import { CreateComponent } from '../list/create'
import { ICharacter } from '../main/interfaces'


interface ITabProps {
    tab: ITab | null;
    key: number;
    activeTab: ITab | null;
    changeActiveTab: (tab: ITab | null) => void;
}

interface ITabsProps {
    activeTab: ITab | null;
    onClickHandle: (tab: ITab) => void;
}

const Tab = (probs: ITabProps) =>{
    if(probs.tab === null){ return <div/>}
    const changeFunction = () => probs.changeActiveTab(probs.tab)

    return <li className={probs.tab === probs.activeTab ? "is-active" : ""}
        onClick={changeFunction}>
        <a>
            { /* <span className="icon is-small"><i className="fa fa-image"></i></span> */}
            <span>{probs.tab.name}</span>
        </a>
    </li>
    }

interface IState {
    characters: ICharacter[]
}

export class Tabs extends React.Component<{}> {
    public props: ITabsProps
    public state: IState

    public tabList = [
        {
            content: <ListComponent />,
            name: "Characters",
        }, {
            content: <CreateComponent />,
            name: "Create Character"
    
        }, {
            content: "Figth 123",
            name: "Figth"
        }
    ];

    public render() {
        return (
            <div className="tabs">
                <ul>
                    {this.tabList.map((tab,index) => 
                        <Tab 
                            tab={tab} 
                            key={index} 
                            activeTab={this.props.activeTab} 
                            changeActiveTab={this.props.onClickHandle}
                        />)}
                </ul>
            </div>
        );
    }
    

}
