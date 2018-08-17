import Immutable from 'immutable';

export interface IState {
    readonly searchWindow:boolean;
}

const initialState:IState = {
    searchWindow: false
};

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class StoreData extends Immutable.Record(initialState) implements IState {
    readonly searchWindow:boolean;
}