import * as React from 'react';
import * as css from '../../css/components/searchWindow/SearchWindow.css';
import {BtnClose} from "../BtnClose";
import {SearchInput} from "./SearchInput";

export interface PropsInterface {}
export interface StateInterface {}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class SearchWindow extends React.Component<PropsInterface, StateInterface> {
    render() {
        return (
            <div className={css.main}>
                <header>
                    <BtnClose/>
                </header>
                <SearchInput/>
            </div>
        );
    }
}