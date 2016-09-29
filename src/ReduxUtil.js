/*
 * Copyright 2011 Yonghong Technology Corp, Inc. All rights reserved.
 * Yonghong Technology Corp PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

//import {isEqual} from 'lodash';

/**
 * The redux utitility class.
 * @author Yonghong Technology Corp, Inc.
 */
export default class ReduxUtil {
    /**
     * Transform action type depend on it's level.
     */
    //static transformActType(actType, level) {
    //    if(actType && level >= 0) {
    //        let types = actType.split("/");
    //
    //        if(types && types.length > level && types[level]) {
    //            return types[level];
    //        }
    //    }
    //
    //    return actType;
    //}

    /**
     * Action creater.
     */
    static actionCreater(actType, ...args) {
        if(!actType) {
            console.error('Action type is null!');
        }

        return {type: actType, ...args};
    }

    /**
     * Action creater.
     */
    // @temp mijie need refactor
    static dbActionCreater(actType, id, ...args) {
        if(!actType) {
            console.error('Action type is null!');
        }

        return {type: actType, id: id, ...args};
    }

    /**
     * Action creater.
     */
    //static elemActionCreater(actType, id, elemKey, ...args) {
    //    if(!actType) {
    //        console.error('Action type is null!');
    //    }
    //
    //    return {type: actType, id: id, key: elemKey, ...args};
    //}

    /**
     * Assign state for reducer.
     */
    //static assignState(state) {
    //    let newState = Object.assign({}, state);
    //    newState.__proto__ = state.__proto__;
    //    return newState;
    //}

    /**
     * Select the element that are currently being edited.
     */
    //static selectElemFromState(state, ownProps) {
    //    let context = ReduxUtil.getDBContext(state.gContext, ownProps.ctxtId);
    //    let elems = context ? context.elems : null;
    //    let ielem = elems ? elems[ownProps.elemKey] : null;
    //    return {
    //        ielem: ielem,
    //        zIndex: ielem ? ielem.zIndex : null,
    //        refreshFlag: ielem ? ielem._refreshFlag : false
    //    };
    //}

    /**
     * Get the db context by id.
     */
    //static getDBContext(gContext, id) {
    //    return gContext ? gContext.dsmap[id] || gContext.flymap[id] || gContext.tstylemap[id] : null;
    //}

    /**
     * Performs a deep comparison between two values to determine if they are equivalent.
     */
    //static isEqual(value, other) {
    //    return isEqual(value, other);
    //}


}