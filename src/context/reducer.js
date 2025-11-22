export const initialState = {
  data: [],
  loading: false,
  error: null,
  filters: {
    channel: "",
    region: "",
    search: "",
  },
};

export function dashboardReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "SET_FILTERS":
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };

    default:
      return state;
  }
}
