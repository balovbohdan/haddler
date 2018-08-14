import {ReduceStore} from 'flux/utils';
import {Dispatcher as DispatcherBase} from 'flux';

type TStore = { searchWindow:boolean; };
type TPayload = { type:string; };

type TResolver = (state:TStore, payload?:TPayload) => TStore;

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class Store extends ReduceStore<TStore, TPayload> {
    static readonly TOGGLE_SEARCH_WINDOW = 'toggleSearchWindow';

    getInitialState():TStore {
        return {
            searchWindow: false
        };
    }

    reduce(state:TStore, payload:TPayload):TStore {
        try {
            const resolver:TResolver = Resolvers[payload.type] || null;
            if (typeof resolver === 'function') return resolver.apply(Store, arguments);
            return state;
        } catch (e) {
            return state;
        }
    }
}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class Dispatcher extends DispatcherBase<TPayload> {
    static get():Dispatcher { return this.instance ? this.instance : (this.instance = new Dispatcher()); }
    private constructor() { super(); }
    private static instance:Dispatcher|null = null;
}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
class Resolvers {
    static toggleSearchWindow(state: TStore):TStore {
        state.searchWindow = !state.searchWindow;
        return state;
    }
}

Dispatcher.get().register(payload => {
    console.log('payload type', payload.type);
    return true;
});