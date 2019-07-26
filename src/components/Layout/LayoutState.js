export const initialState = {
  my_prop: false
};

export const TOGGLE_PROP = "Layout/TOGGLE_PROP";

export const toggleProp = (new_val) => ({
  type: TOGGLE_PROP,
  payload: new_val
})

export default function LoginReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_PROP:
    return {
      ...state,
      ...payload
    }
    default:
      return state;
  }
}
