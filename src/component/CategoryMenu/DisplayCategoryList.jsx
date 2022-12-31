import {
  Avatar,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const imageOne = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=960",
  "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/1479b1a0-ee19-49a6-94e4-3c43049776c0.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/3ac04d3f-b4f5-4d01-8258-8083979c792e.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/cd0c1eba-74bd-4d6b-9ec3-20c6dd8b5226.jpeg?im_w=720",
];
export default function DisplayCategoryList() {
  const [isFevorate, setIsFevorate] = useState([]);
  const [isHovered, setIsHovered] = useState({
    index: null,
    isHovered: false,
  });
  const DisplayItems = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
  // console.log("fevorate", isFevorate);
  const fevorateHandler = index => {
    let isExist = isFevorate.includes(index);
    if (isExist) {
      const remaingFevorate = isFevorate.filter(
        Index => Index !== index
      );
      setIsFevorate(remaingFevorate);
      return;
    }
    setIsFevorate([...isFevorate, index]);
  };
  return (
    <>
      <Box
        container
        spacing={1}
        sx={{
          width: "95%",
          height: "700px",
          margin: "auto",
          marginTop: "100px",
          padding:'10px',
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridGap: "1rem ",
        
        }}
      >
        {DisplayItems.map((el, index) => {
          return (
            <Box
            
              onMouseEnter={() =>
                setIsHovered({ index, isHovered: true })
              }
              onMouseLeave={() =>
                setIsHovered({ index, isHovered: false })
              }
              mb={2}
              key={index}
            >
              <Box
                sx={{
                 
                  borderRadius: "9px",
                  position: "relative",
                  zIndex: "1",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "250px",
                    borderRadius: "9px",
                    position: "relative",
                  }}
                >
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={
                      isHovered.index === index &&
                      isHovered.isHovered
                        ? true
                        : false
                    }
                    pagination={{ clickable: true }}
                    onSwiper={swiper => {}}
                    onSlideChange={() => {}}
                    style={{
                      "--swiper-navigation-color": "#FFF",
                      "--swiper-pagination-color": "#FFF",
                      "--swiper-navigation-size": "25px",
                    }}
                  >
                    {imageOne.map(image => {
                      return (
                        <SwiperSlide>
                          <Avatar
                            src={`${image}`}
                            sx={{
                              width: "100%",
                              height: "250px",
                            }}
                            variant="rounded"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill={
                      isFevorate.includes(index)
                        ? "red"
                        : "rgba(0, 0, 0, 0.5)"
                    }
                    onClick={() => {
                      fevorateHandler(index);
                    }}
                    class="bi bi-heart-fill"
                    viewBox="0 0 32 32"
                    style={{
                      position: "absolute",
                      right: "5%",
                      top: "5%",
                      zIndex: "2",
                      cursor: "pointer",
                      display: "block",
                      stroke: "white",
                      strokeWidth: 2,
                      overflow: "visible",
                    }}
                  >
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                  </svg>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    marginBottom: "-2px",
                  }}
                >
                  South Nilande,Maldives
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "gray",
                    marginBottom: "-2px",
                  }}
                >
                  1 bed{" "}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", color: "gray" }}
                >
                  1 - 10 Jan
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>
                    ₹3,500
                  </span>{" "}
                  night
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
