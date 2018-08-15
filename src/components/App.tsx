import * as React from 'react';
import {Header} from "./header/Header";
import * as css from '../css/main.css';
import {SearchWindow} from './searchWindow/SearchWindow';
import {Store} from "../stores/App";

export interface IProps {}
export interface IState { searchWindow:boolean; }

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class App extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.state = App.getDefState();
        this.handleStoreListeners();
    }

    render() {
        return (
            <div className={css.App}>
                <Header/>
                {this.renderSearchWindow()}
            </div>
        );
    }

    renderSearchWindow() { return this.state.searchWindow ? <SearchWindow/> : null; }
    static getDefState():IState { return Store.get().getInitialState(); }

    private handleStoreListeners() {
        Store.get().addListener(() => this.setState(Store.get().getState()));
    }
}