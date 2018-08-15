import * as React from 'react';
import {Btn} from "../Btn";
import * as img from '../../assets/icons/search-1.svg';
import {SearchWindow} from "../searchWindow/SearchWindow";

/**
 * Button 'Open search window'.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class SearchBtn extends React.Component {
    render() {
        return (
            <Btn
                img={img}
                onClick={SearchWindow.toggle.bind(SearchWindow)}
                style={SearchBtn.getStyle()}/>
        );
    }

    private static getStyle():{[ket:string]:string} { return { border: 'none' }; }
}