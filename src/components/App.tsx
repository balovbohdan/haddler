import * as React from 'react';
import {Header} from "./Header";
import * as css from '../css/reset.css';

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