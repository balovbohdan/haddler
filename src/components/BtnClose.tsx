import * as React from 'react';
import * as css from '../css/components/BtnClose.css';

export interface IProps { onClick?:Function; }
export interface IState {}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class BtnClose extends React.Component<IProps, IState> {
    render() {
        return (
            <div onClick={this.onClick.bind(this)} className={css.main}>
                <span>✖</span>
            </div>
        );
    }

    onClick() {
        if (typeof this.props.onClick !== 'function') return;
        this.props.onClick();
    }
}