import * as React from 'react';
import { ITab } from './interfaces';

export const tabList: ITab[] = [
    {
        content: "Character",
        name: "Character",
    }, {
        content: "Create Character",
        name: "Create Character"

    }, {
        content: "Figth",
        name: "Figth"
    }
];

interface ITabProps {
    tab: ITab;
    key: number;
    activeTab: ITab;
    changeActiveTab: (tab: ITab) => void;
}

interface ITabsProps {
    activeTab: ITab;
    onClickHandle: (tab: ITab) => void;
}

const Tab = (probs: ITabProps) =>{
    const changeFunction = () => probs.changeActiveTab(probs.tab)

    return <li className={probs.tab === probs.activeTab ? "is-active" : ""}
        onClick={changeFunction}>
        <a>
            { /* <span className="icon is-small"><i className="fa fa-image"></i></span> */}
            <span>{probs.tab.name}</span>
        </a>
    </li>
    }

export class Tabs extends React.Component<{}> {
    public props: ITabsProps

    public render() {
        return (
            <div className="tabs">
                <ul>
                    {tabList.map((tab,index) => 
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
