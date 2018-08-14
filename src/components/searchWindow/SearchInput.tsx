import * as React from 'react';
import * as css from '../../css/components/searchWindow/SearchInput.css';

export interface PropsInterface {}
export interface StateInterface {}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class SearchInput extends React.Component<PropsInterface, StateInterface> {
    render() {
        return (
            <div className={css.main}>
                <input type="text" placeholder={'Что надобно, чудак?'} autoFocus/>
            </div>
        );
    }
}