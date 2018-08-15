import * as React from 'react';
import * as css from '../../css/components/searchWindow/SearchWindow.css';
import {BtnClose} from "../BtnClose";
import {SearchInput} from "./SearchInput";
import {Dispatcher} from "../../stores/App";

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
                    <BtnClose onClick={SearchWindow.toggle.bind(SearchWindow)}/>
                </header>
                <SearchInput/>
            </div>
        );
    }

    static toggle() { Dispatcher.get().dispatch({ type: Dispatcher.TOGGLE_SEARCH_WINDOW }); }
}