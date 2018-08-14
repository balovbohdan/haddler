import deepAssign from 'deep-assign';

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class ObjectUtils {
    static getClone<T>(obj:T):T { return JSON.parse(JSON.stringify(obj)) as T; }
    static assignDeep<T1, T2>(obj1:T1, obj2:T2):(T1 & T2) { return deepAssign(obj1, obj2) as (T1 & T2); }
}