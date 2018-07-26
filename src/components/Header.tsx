import * as React from 'react';
import * as css from '../css/components/Header.css';
import {Btn} from "./Btn";

export interface PropsInterface {}
export interface StateInterface {}

export class Header extends React.Component<PropsInterface, StateInterface> {
    render() {
        return (
            <div className={css.main}>
                <h1 className={css.title}>handle & scrabble</h1>
                <Btn text={'Hello'}/>
            </div>
        );
    }
}