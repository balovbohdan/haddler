import * as React from 'react';
import * as css from '../css/components/BtnClose.css';

export interface PropsInterface {}
export interface StateInterface {}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class BtnClose extends React.Component<PropsInterface, StateInterface> {
    render() { return <div className={css.main}><span>✖</span></div>; }
}