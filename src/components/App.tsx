import * as React from 'react';
import {Header} from "./Header";

export interface PropsInterface {}
export interface StateInterface {}

export class App extends React.Component<PropsInterface, StateInterface> {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}