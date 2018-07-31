import * as React from 'react';
import css from '../css/components/Btn.css';

export interface PropsInterface {
    text?:string;
    style?:{[key:string]:string};
    img?:string;
}

export interface StateInterface {}

export class Btn extends React.Component<PropsInterface, StateInterface> {
    render() {
        return (
            <div style={this.props.style} className={css.main}>
                {this.props.text || ''}
                {this.props.img && <img src={this.props.img}/>}
            </div>
        );
    }
}