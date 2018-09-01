import * as React from 'react';
import * as  ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Tabs, tabList } from './tabs'
import { IState, ITab, IUser } from './interfaces';
import { getUserData } from '../shared/token'

interface IActiveTimeContenctProps {
    content: string | React.Component;
    tab: ITab;
}

const ActiveTabContent = (props: IActiveTimeContenctProps) => <div>{props.content}</div>;

export class DashboardComponent extends React.Component<{}> {
    public state: IState = {activeTab: tabList[1], user: getUserData()}

    public render() {
        return (
            <section className="section">
            <div className="container">
            <Tabs
                activeTab={this.state.activeTab}
                onClickHandle={this.onClickHandle}
            />
            <ReactCSSTransitionGroup
              className="tabs-content"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={150}
            >
            
            <ActiveTabContent content={this.activeTabContent()} tab={this.state.activeTab}  />
            
            </ReactCSSTransitionGroup>
            </div>
        </section>
      )
    }

    public activeTabContent = () => this.state.activeTab.content

    public onClickHandle = (tab: ITab) => {
        const userData: IUser = this.state.user
        this.setState({user: userData, activeTab: tab})
    }
}
