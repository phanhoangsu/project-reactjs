export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.newProduct];
    case "REMOVE":
      return state?.filter((pro) => pro?.id !== action.id);

    default:
      return state;
  }
};
