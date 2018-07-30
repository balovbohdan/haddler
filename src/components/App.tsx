import * as React from 'react';
import {Header} from "./Header";
import * as css from '../css/main.css';

export interface PropsInterface {}
export interface StateInterface {}

export class App extends React.Component<PropsInterface, StateInterface> {
    render() {
        return (
            <div className={css.App}>
                <Header/>
            </div>
        );
    }
}