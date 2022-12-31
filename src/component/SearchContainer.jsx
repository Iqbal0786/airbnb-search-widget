import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedDate,
  resetAllGuest,
  setIsAddGuesSelected,
  setIsCheckinSelected,
  setIsCheckoutSelected,
  setIsWhereSelected,
  setOuterClick,
} from "../Redux/features/searchWidgetSlice";
import SearchByDestination from "./searchComponents/SearchByDestination";
import DateSelection from "./searchComponents/DateSelection";
import ClearIcon from "@mui/icons-material/Clear";
import AddGuest from "./searchComponents/AddGuest";
import CheckoutDateSelection from "./searchComponents/CheckoutDateSelection";
import useOutsideClick from "../CustomHooks/useOutsideClick";

//! months names variable
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default function SearchContainer({ hideSearchWidget }) {
  const dispatch = useDispatch();
  const {
    isWhereSelected,
    isAddGuestSelected,
    isCheckinSelected,
    isCheckoutSelected,
    selectedDate,
    showDatePicker,
    petCount,
    adultCount,
    childrenCount,
    infantCount,
    outerClickEffect,
  } = useSelector((store) => store.searchWidgetReducer);
  const checkinDateResult =
    selectedDate[0] != null
      ? `${selectedDate[0]["$D"]} ${MONTHS[selectedDate[0]["$M"]]}`
      : "";
  const checkoutDateResult =
    selectedDate[1] != null
      ? `${selectedDate[1]["$D"]} ${MONTHS[selectedDate[1]["$M"]]}`
      : "";
  const TOTAL_GUEST_COUNT = infantCount + petCount + adultCount + childrenCount;
  // console.log('check in state ',isCheckinSelected)
  // console.log('checkout state ',isCheckoutSelected)
  // console.log('selected date ',selectedDate)
  //console.log('outer click effect ',outerClickEffect)

  const wrapperRef = useRef();

  //? custome outside click hook check start
  useOutsideClick(wrapperRef, () => {
    dispatch(setOuterClick());
  });
  // console.log('outer click run',isVisible)

  return (
    <>
      <Box
        sx={{
          width: "900px",
          height: "60px",
          margin: "auto",
          borderRadius: "30px",
          backgroundColor: "whitesmoke",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
        // ref={wrapperRef}
      >
        {/* //! Search destination component start  */}
        <Box
          sx={{
            width: "30%",
            height: "100%",
            borderRadius: "37px",
            backgroundColor: isWhereSelected ? "white" : "whitesmoke",
            boxShadow: isWhereSelected
              ? "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              : "",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation()
            dispatch(setIsWhereSelected());
          }}
        >
          <Stack
            direction={"column"}
            sx={{ width: "100%", height: "100%", padding: "15px 0px 0px 30px" }}
          >
            <Typography sx={{ fontSize: "14px", marginBottom: "-5px" }}>
              Where
            </Typography>
            <InputBase
              placeholder="Search  destinations"
              sx={{ fontSize: "14px" }}
            />
          </Stack>
        </Box>
        {!isWhereSelected && (
          <Divider orientation="vertical" sx={{ height: "70%" }} />
        )}
        {/* //!Search destination component end  */}

        {/* //! check in date component start  */}
        <Box
          sx={{
            width: "15%",
            height: "100%",
            borderRadius: "37px",
            backgroundColor: isCheckinSelected ? "white" : "whitesmoke",
            boxShadow: isCheckinSelected
              ? "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              : "",
          }}
        >
          <Stack
            direction={"column"}
            sx={{ width: "100%", height: "100%", padding: "15px 0px 0px 30px" }}
            onClick={(event) => {
              event.stopPropagation()
              dispatch(setIsCheckinSelected());
            }}
          >
            <Typography sx={{ fontSize: "14px", marginBottom: "-2px" }}>
              Check in
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              {checkinDateResult ? checkinDateResult : "Add dates"}
            </Typography>
          </Stack>
        </Box>
        {!isCheckinSelected && (
          <Divider orientation="vertical" sx={{ height: "70%" }} />
        )}
        {/* //!check in date component end  */}

        {/* //! Check out  date component start  */}
        <Box
          sx={{
            width: "15%",
            height: "100%",
            borderRadius: "37px",
            backgroundColor: isCheckoutSelected ? "white" : "whitesmoke",
            boxShadow: isCheckoutSelected
              ? "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              : "",
          }}
        >
          <Stack
            direction={"column"}
            sx={{ width: "100%", height: "100%", padding: "15px 0px 0px 30px" }}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(setIsCheckoutSelected());
            }}
          >
            <Typography sx={{ fontSize: "14px", marginBottom: "-2px" }}>
              Check out{" "}
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              {checkoutDateResult ? (
                <>
                  {checkoutDateResult}{" "}
                  <ClearIcon
                    sx={{
                      backgroundColor: "whitesmoke",
                      borderRadius: "50%",
                      fontSize: "15px",
                      padding: "2px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      //! clearing check in and check out date
                      e.stopPropagation()
                      dispatch(clearSelectedDate());
                    }}
                  />
                </>
              ) : (
                "Add dates"
              )}
            </Typography>
          </Stack>
        </Box>
        {!isCheckoutSelected && (
          <Divider orientation="vertical" sx={{ height: "70%" }} />
        )}
        {/* //!Check out  date component end  */}

        {/* //! add guest  component start  */}
        <Box
          sx={{
            width: "30%",
            height: "100%",
            borderRadius: "37px",
            backgroundColor: isAddGuestSelected ? "white" : "whitesmoke",
            boxShadow: isAddGuestSelected
              ? "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              : "",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Stack
            direction={"column"}
            // border='1px solid red'
            sx={{ maxWidth: "70%", height: "100%", padding: "15px 0px 0px 30px" }}
            onClick={(e) => {
              e.stopPropagation()
              dispatch(setIsAddGuesSelected());
            }}
          >
            <Typography sx={{ fontSize: "14px", marginBottom: "-2px" }}>
              Who
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              {TOTAL_GUEST_COUNT > 0 ? (
                <>
                  {TOTAL_GUEST_COUNT + " Guests"}
                  <ClearIcon
                    sx={{
                      backgroundColor: "whitesmoke",
                      borderRadius: "50%",
                      fontSize: "15px",
                      padding: "2px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      //! clearing all guest counts
                      e.stopPropagation()
                      dispatch(resetAllGuest());
                    }}
                  />
                </>
              ) : (
                "Add guests"
              )}
            </Typography>
          </Stack>

          {!outerClickEffect ? (
            <Stack
              direction={"row"}
              sx={{
                backgroundColor: "rgb(255,56,92,1)",
                color: "white",
                width: "40%",
                height: "70%",
                borderRadius: "37px",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                padding: "5px",
                marginRight: "10px",
                justifyContent: "space-evenly",
                cursor: "pointer",
              }}
              onClick={() => {
                //  console.log('serach clicked')
                hideSearchWidget();
              }}
            >
              <SearchIcon />
              <Typography>search</Typography>
            </Stack>
          ) : (
            <Avatar
              onClick={(e) => {
                e.stopPropagation()
                hideSearchWidget();
              }}
              //  className={outerClickEffect ?"scale-down-hor-right ":""}
              sx={{
                backgroundColor: "rgb(255,56,92,1)",
                width:'20%',
                height:  "70%",
                // border:'1px solid blue',
                borderRadius: "50%",
                marginRight:'2%',
                cursor: "pointer",
                padding:'5px'
              }}
            >
              {/* <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth:"5", overflow: "visible",}}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg> */}
              <SearchIcon  sx={{fontWeight:'bolder',fontSize:"27px"}} />
            </Avatar>
          )}
        </Box>
        {/* //!add guest  component end  */}
      </Box>
      {/* //? {showing search destination component} */}
      {isWhereSelected && <SearchByDestination />}

      {/* //? {showing date picker for checkin and checkout} */}
      {isCheckinSelected && <DateSelection />}
      {isCheckoutSelected && <CheckoutDateSelection />}
      {/* //?showing add guest component if selected  */}
      {isAddGuestSelected && <AddGuest />}
    </>
  );
}
