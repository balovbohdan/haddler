import * as React from 'react';
import * as css from '../../css/components/Header.css';
import classnames from 'classnames';
import {SearchBtn} from "./SearchBtn";
import {SignInBtn} from "./SignInBtn";
import {StartBtn} from "./StartBtn";

export interface PropsInterface {}
export interface StateInterface {}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class Header extends React.Component<PropsInterface, StateInterface> {
    render() {
        return (
            <div className={css.main}>
                <div className={css.container}>
                    <div className={classnames(css.part, css.left)}>
                        <SearchBtn/>
                    </div>
                    <div className={classnames(css.part, css.center)}>
                        <h1 className={css.title}>handle & scrabble</h1>
                    </div>
                    <div className={classnames(css.part, css.right)}>
                        <SignInBtn/>
                        <StartBtn/>
                    </div>
                </div>
            </div>
        );
    }
}