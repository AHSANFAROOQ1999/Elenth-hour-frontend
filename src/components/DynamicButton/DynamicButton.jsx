import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function DynamicButton(props) {
  return (
    <Link to={props?.link}>
      <Button
        // block
        // type={props?.type}
        // danger={props?.property}
        // onClick={props?.function}
        // disabled={props?.disabled}
      >
        {props?.name}
      </Button>
    </Link>
  );
}
