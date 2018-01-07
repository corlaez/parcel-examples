import * as types from "./action-types";

export const updateSay = newSay => ({ type: types.UPDATE, payload: newSay });
