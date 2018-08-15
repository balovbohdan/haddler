import * as React from 'react';
import {Btn} from "../Btn";

/**
 * Button 'Sign In'.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class SignInBtn extends React.Component {
    render() {
        return (
            <Btn
                style={SignInBtn.getStyle()}
                text={'Войти'}/>
        );
    }

    private static getStyle():{[key:string]:string} {
        return {
            border: 'none',
            marginRight: '10px',
            fontWeight: 'bold',
            fontSize: '14px'
        };
    }
}