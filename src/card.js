import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { MySpaceSubtitle, MySpaceSubtitle2, MySpaceTitle, MySpaceImg, MySpaceBody, MySpaceCard } from "./styles";

const GalaxyCard = props => {
  return (
      <MySpaceCard>
        <MySpaceBody>
          <MySpaceTitle>
            <h1>{props.title}</h1>
          </MySpaceTitle>
          <MySpaceImg src={props.image} alt={props.title} />
          <MySpaceSubtitle>
            <p>{props.explanation}</p>
          </MySpaceSubtitle>
          <MySpaceSubtitle2>
            <h6> Date: {props.date}</h6>
          </MySpaceSubtitle2>
        </MySpaceBody>
      </MySpaceCard>
    
  );
};
export default GalaxyCard;
