const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  dataSeat: [],
  movieId: null,
  movieName: null,
  cinemaId: null,
  cinemaName: null,
  image: null,
  date: null,
  time: null,
  price: null,
  theatstudioId: null,
  totalPrice: null,
};

const orderslice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addMovieId: (prevState, action) => {
      return {
        ...prevState,
        movieId: action.payload.id,
        movieName: action.payload.name,
        cinemaName: action.payload.cinemaName,
        image: action.payload.image,
      };
    },
    addDataBookNow: (prevState, action) => {
      console.log(action.payload);
      return {
        ...prevState,
        cinemaId: action.payload.cinemaId,
        cinemaName: action.payload.cinemaName,
        image: action.payload.image,
        date: action.payload.date,
        time: action.payload.time,
        price: action.payload.price,
      };
    },
    addSeats: (prevState, action) => {
      const index = prevState.dataSeat.indexOf(action.payload);
      if (index !== -1) {
        const newSelected = [...prevState.dataSeat];
        newSelected.splice(index, 1);
        return { ...prevState, dataSeat: newSelected };
      } else {
        
        const newSelected = [...prevState.dataSeat, action.payload];
        return { ...prevState, dataSeat: newSelected };
      }
    },
    addOrder: (prevState, action) => {
      return {
        ...prevState,
        
        theatstudioId: action.payload.theatstudioId,
        totalPrice: action.payload.totalPrice,
      };
    },
    resetOrder: () => {
      return initialState;
    },
  },
});

export const orderAction = { ...orderslice.actions };
export default orderslice.reducer;
