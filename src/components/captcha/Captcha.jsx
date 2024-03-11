import {
  Alert,
  Button,
  CardActions,
  CardContent,

  TextField,
} from "@mui/material";
import {useTranslation} from "react-i18next"

import React, { useState } from "react";
import "./Captcha.scss";

export const Captcha = () => {
  const {t} =useTranslation();



  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshString = () => {
    setText("");
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const matchCaptcha = (event) => {
    event.preventDefault();
    if (text === captcha) {
      setValid(false);
      setSuccess(true);
    } else {
      setValid(true);
      setSuccess(false);
    }
  };

  return (
    <React.Fragment  >
      {success && (
        <Alert variant="outlined" sx={{ marginBottom: "20px" }}>
          Successful
        </Alert>
      )}
      <div className="cardxyz" >


        <CardContent style={{ backgroundColor: '#dbdafa' }} className="cardxyz">
          <CardActions>
            <div className="h3" style={{ color: 'white', backgroundColor: 'black', padding: '5px 15px', borderRadius: '5px' }}>{captcha} </div>
            <Button id="primaryButton2"

              onClick={() => refreshString()}
            >  {t('refresh')}</Button>
          </CardActions>

          <form onSubmit={matchCaptcha}>
            <TextField

              label=""
              focused
              value={text}
              fullWidth
              onChange={(e) => setText(e.target.value)}
              error={valid}
              helperText={valid && "Invalid Captcha"}
            />

            <p id="kvk">
              {t("text10")}
              <a href=""> {t("text11")}</a> 
                {t("text12")}
              
              
              </p>

            <Button
              id="primaryButton"
              variant="contained"
              color="success"
              type="submit"
              sx={{ marginTop: "20px" }}

              disabled={
                text === captcha ? false : true
                
              }

            >
             {t("send")}
             
            </Button>
           

          </form>
       
        </CardContent>
      </div>
    </React.Fragment>
  );
};