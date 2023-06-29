import { Col, Divider, Row } from "antd";
import React from "react";
import "./carousel.css"

function CarouselPrepare({ categoryData, categoryName }) {
  return (
    <div>
      <Row className='carouselMakerLabel'>
        <Col span={24}>{categoryName}</Col>
      </Row>
      <Row className='carouselMaker' style={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          flexFlow : "unset"
      }}>
        {categoryData && categoryData.results && categoryData.results.map((e) => {
          return (
            <Col  className="carouselImage">
              <div  style={{
                     paddingRight : "2%",
                      flex: "0 0 auto",
                      padding: "10px",
                      backgroundColor: "#ccc",
                      marginRight: "10px",
                      height: "23rem",
                      width: "18rem",
                      display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
            }}>
                <img style={{height: "120%"}} src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}></img>
                  </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}


export default CarouselPrepare