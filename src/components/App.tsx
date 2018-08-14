import * as React from 'react';
import {Header} from "./Header";
import * as css from '../css/main.css';
import {SearchWindow} from './searchWindow/SearchWindow';

export interface PropsInterface {}

export interface StateInterface {
    searchWindow:boolean;
}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class App extends React.Component<PropsInterface, StateInterface> {
    constructor(props:PropsInterface) {
        super(props);
        this.state = App.getDefState();
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

    static getDefState():StateInterface {
        return {
            searchWindow: true
        };
    }
}