import * as React from 'react';
import * as css from '../css/components/Header.css';
import {Btn} from "./Btn";
import classnames from 'classnames';

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
                <div className={classnames(css.part, css.left)}>

                </div>
                <div className={classnames(css.part, css.center)}>
                    <h1 className={css.title}>handle & scrabble</h1>
                </div>
                <div className={classnames(css.part, css.right)}>
                    <SignInBtn/>
                    <StartBtn/>
                </div>
            </div>
        );
    }
}

/**
 * Button 'Start working with platform'.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
class StartBtn extends React.Component {
    render () { return <Btn style={StartBtn.getStyle()} text={'Начать'}/>; }
    private static getStyle():{[key:string]:string} { return {}; }
}

class SignInBtn extends React.Component {
    render() { return <Btn style={SignInBtn.getStyle()} text={'Войти'}/> }

    private static getStyle():{[get:string]:string} {
        return {
            border: 'none',
            marginRight: '10px',
            fontWeight: 'bold',
            fontSize: '14px'
        };
    }
}