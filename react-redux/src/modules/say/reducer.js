import * as types from "./action-types";
import initialState from "../../store/initial-state";

export default function(state = initialState.say, action) {
  switch (action.type) {
    case types.UPDATE:
      return state == "hey" ? "ho" : "hey";
    default:
      return state;
  }
}
