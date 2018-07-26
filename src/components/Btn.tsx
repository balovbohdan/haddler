import * as React from 'react';

export interface PropsInterface {
    text?:string;
}

export interface StateInterface {}

export class Btn extends React.Component<any, any> {
    render() {
        return <h1>{this.props.text || 'Button'}</h1>
    }
}