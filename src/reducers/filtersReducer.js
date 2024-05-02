const initialState = {
  role: "",
  location: "",
  mode: "",
  experience: "",
  basePay: "",
};
export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_ROLE":
      return {
        ...state,
        role: [...state.role, payload],
      };
    case "FILTER_BY_LOCATION":
      return {
        ...state,
        location: [...state.location, payload],
      };
    case "FILTER_BY_REMOTE/ON-SITE":
      return {
        ...state,
        mode: [...state.mode, payload],
      };
    case "FILTER_BY_EXPERIENCE":
      return {
        ...state,
        experience: [...state.experience, payload],
      };
    case "FILTER_BY_BASE_PAY":
      return {
        ...state,
        basePay: [...state.basePay, payload],
      };
    default:
      return state;
  }
};
