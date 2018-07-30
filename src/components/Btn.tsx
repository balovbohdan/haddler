import * as React from 'react';
import css from '../css/components/Btn.css';

export interface PropsInterface {
    text?:string;
    style?:{[key:string]:string};
}

export interface StateInterface {}

export class Btn extends React.Component<PropsInterface, StateInterface> {
    render() {
        return <div style={this.props.style} className={css.main}>{this.props.text || 'Button'}</div>
    }
}