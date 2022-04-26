import React from "react";
import MUIButton from '@material-ui/core/Button';
import { CircularProgress } from "@material-ui/core";


function Button(props) {

    const { children, isLoading, ...rest } = props;
  
    return (
      <MUIButton {...rest}>
        {!isLoading && children}
        {isLoading && <CircularProgress color="secondary"/>}
      </MUIButton>
    );
  }
  
  export default Button;