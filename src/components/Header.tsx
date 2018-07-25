import * as React from 'react';
import * as css from '../css/components/Header.css';

export interface PropsInterface {}
export interface StateInterface {}

export class Header extends React.Component<PropsInterface, StateInterface> {
    render() {
        return <div className={css.Header}>hello world from header</div>;
    }
}