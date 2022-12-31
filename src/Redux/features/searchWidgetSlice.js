import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWhereSelected: false,
  isCheckinSelected: false,
  isCheckoutSelected: false,
  isAddGuestSelected: false,
  showDatePicker: false,
  selectedDate: [null, null],
  adultCount: 0,
  childrenCount: 0,
  petCount: 0,
  infantCount: 0,
  outerClickEffect:false
};

const searchWidgetSlice = createSlice({
  name: "searchWidgetSlice",
  initialState,
  reducers: {
    setIsWhereSelected: (state, action) => {
      state.isWhereSelected = true;
      state.isCheckinSelected = false;
      state.isAddGuestSelected = false;
      state.isCheckoutSelected = false;
      state.showDatePicker = false;
      state.outerClickEffect = false
    },
    setIsCheckinSelected: (state, action) => {
      state.isCheckinSelected = true;
      state.isAddGuestSelected = false;
      state.isWhereSelected = false;
      state.isCheckoutSelected = false;
      state.showDatePicker = true;
      state.outerClickEffect = false
    },
    setIsCheckoutSelected: (state, action) => {
      state.isCheckinSelected = false;
      state.isAddGuestSelected = false;
      state.isWhereSelected = false;
      state.isCheckoutSelected = true;
      state.showDatePicker = true;
      state.outerClickEffect = false
    },
    setIsAddGuesSelected: (state, action) => {
      state.isCheckinSelected = false;
      state.isAddGuestSelected = true;
      state.isWhereSelected = false;
      state.isCheckoutSelected = false;
      state.showDatePicker = false;
      state.outerClickEffect = false
    },
    setCheckinSelectedDate: (state, action) => {
      state.outerClickEffect = false
      state.isCheckinSelected = false;
      state.isCheckoutSelected = true;
      state.selectedDate[0] = action.payload;
      
    },
    setCheckOutSelectedDate: (state, action) => {
      state.outerClickEffect = false
      state.isCheckinSelected = false;
      state.isCheckoutSelected = false;
      state.isAddGuestSelected=true;
      state.selectedDate[1] = action.payload;
      
    },
    clearSelectedDate: (state, action) => {
      state.outerClickEffect = false
      state.isCheckoutSelected = false;
      state.isCheckinSelected = true;
      state.selectedDate = [null, null];
    },
    resetAll: (state, action) => {
      state.isWhereSelected = false;
      state.isCheckinSelected = false;
      state.isAddGuestSelected = false;
      state.isCheckoutSelected = false;
      state.showDatePicker = false;
    },
    incrementadultCount: (state, action) => {
      state.adultCount += 1;
    },
    decrementadultCount: (state, action) => {
      if (state.adultCount == 0) {
        return;
      }
      state.adultCount -= 1;
    },
    incrementchildrenCount: (state, action) => {
      state.childrenCount += 1;
    },
    decrementchildrenCount: (state, action) => {
      if (state.childrenCount == 0) {
        return;
      }
      state.childrenCount -= 1;
    },
    incrementInfantCount: (state, action) => {
      state.infantCount += 1;
    },
    decrementInfantCount: (state, action) => {
      if (state.infantCount == 0) {
        return;
      }
      state.infantCount -= 1;
    },

    incrementpetCount: (state, action) => {
      state.petCount += 1;
    },
    decrementpetCount: (state, action) => {
      if (state.petCount == 0) {
        return;
      }
      state.petCount -= 1;
    },
    resetAllGuest:(state,action)=>{
      state.adultCount=0
      state.childrenCount=0
      state.infantCount=0
      state.petCount=0
    },
    setOuterClick:(state, action) => {
     
      state.outerClickEffect=true
      state.isWhereSelected=false
      state.isCheckinSelected = false;
      state.isAddGuestSelected = false;
      state.isCheckoutSelected = false;
    },
    disableOuterClick:(state, action) => {
      state.isCheckinSelected = false;
      state.isAddGuestSelected = false;
      state.isWhereSelected = false;
      state.isCheckoutSelected = false;
      state.showDatePicker = false;
      state.outerClickEffect=false
    }
  },
});

export const {
  setIsWhereSelected,
  setIsAddGuesSelected,
  setIsCheckinSelected,
  setIsCheckoutSelected,
  setCheckinSelectedDate,
  setCheckOutSelectedDate,
  clearSelectedDate,
  incrementadultCount,
  decrementadultCount,
  incrementchildrenCount,
  decrementchildrenCount,
  incrementInfantCount,
  decrementInfantCount,
  incrementpetCount,
  decrementpetCount,
  disableOuterClick,
  resetAllGuest,
  setOuterClick,
  resetAll,
} = searchWidgetSlice.actions;
export default searchWidgetSlice.reducer;
