import {
  Alert,
  Button,
  CardActions,
  CardContent,

  TextField,
} from "@mui/material";

import React, { useState } from "react";

import "./Captcha.scss";

export const Captcha = () => {
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
            <div className="h3" style={{ color: 'white', backgroundColor: 'black', padding: '5px 15px', borderRadius: '5px' }}>{captcha}</div>
            <Button id="primaryButton2"

              onClick={() => refreshString()}
            > Yenile</Button>
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

            <p id="kvk">Kişisel veriler kanunu gereğince, sisteme kayıt yapmanız durumunda <a href="">Aydınlatma metnini
              (tıklayarak okuyabilirsiniz) ve Açık Rıza beyanını (tıklayarak okuyabilirsiniz)</a>  kabul etmiş olursunuz</p>

            <Button
              id="primaryButton"
              variant="contained"
              color="success"
              type="submit"
              sx={{ marginTop: "20px" }}
              disabled={!text}
            >
              Gönder
            </Button>
          </form>
        </CardContent>
      </div>
    </React.Fragment>
  );
};