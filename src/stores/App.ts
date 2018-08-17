import {ReduceStore} from 'flux/utils';
import {Dispatcher as DispatcherBase} from 'flux';
import {EventEmitter} from "fbemitter";
import Immutable from 'immutable';

type TStore = { searchWindow:boolean; };
type TPayload = { type:string; };
type TResolver = (state:TStore, payload?:TPayload) => TStore;

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class Dispatcher {
    static readonly TOGGLE_SEARCH_WINDOW:string = 'toggleSearchWindow';

    static get():DispatcherBase<TPayload> {
        return this.instance
            ? this.instance :
            (this.instance = new DispatcherBase<TPayload>());
    }

    private static instance:DispatcherBase<TPayload>|null = null;
}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class Store extends ReduceStore<TStore, TPayload> {
    static get():Store { return this.instance ? this.instance : new Store(); }

    getInitialState():TStore {
        return {
            searchWindow: false
        };
    }

    doReduce(payload:TPayload):TStore { return this.reduce(this.getState(), payload); }
    getState():TStore { return Immutable.fromJS(super.getState()); }
    getEmitter():EventEmitter { return this.__emitter; }

    reduce(state:TStore, payload:TPayload):TStore {
        state = Immutable.fromJS(state);

        try {
            const eventType: string = payload.type;
            const resolver: TResolver = Resolvers[eventType] || null;
            if (typeof resolver !== 'function') return state;
            const reducedState: TStore = resolver(state, payload);
            this.getEmitter().emit(eventType);
            return reducedState;
        } catch (e) {
            return state;
        }
    }


    private constructor() {
        if (Store.instance) return Store.instance;
        super(Dispatcher.get());
        Store.instance = this;
    }

    private static instance:Store|null = null;
}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
class Resolvers {
    static toggleSearchWindow(state:TStore):TStore {
        state = Immutable.fromJS(state);
        state.searchWindow = !state.searchWindow;
        return state;
    }
}

Dispatcher.get().register((payload:TPayload) => {
    try {
        Store.get().doReduce(payload);
        return true;
    } catch (e) {
        return false;
    }
});