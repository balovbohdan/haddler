import * as React from 'react';
import css from '../css/components/Btn.css';

export interface PropsInterface {
    text?:string;
    style?:{[key:string]:string};
    img?:string;
    className?:string;
    onClick?:Function;
}

export interface StateInterface {}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class Btn extends React.Component<PropsInterface, StateInterface> {
    render() {
        return (
            <div style={this.props.style} className={this.props.className || css.main} onClick={this.onClick.bind(this)}>
                {this.props.text || ''}
                {this.props.img && <img src={this.props.img}/>}
            </div>
        );
    }

    onClick() {
        if (typeof this.props.onClick !== 'function') return;
        this.props.onClick();
    }
}