import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';


function App() {
  const [text, setText] = useState();
  const [actualtext, setActual] = useState();
  const [arr, setArr] = useState();


  function enter(event){
    if(event.key === "Enter"){
      setActual(text);
      event.target.value=""

      const texto=actualtext.split(" ");
      console.log(texto)


    } else {

    }
  }
  console.log(actualtext)

  return (
    <div className="App" >
      <Container>
        <Paper style={{ padding: "22px" }}>
          <Grid container>
            <Grid item xs={12}>
              <h1>ChunChunMaru</h1>
            </Grid>
            <Grid item xs={4}>
              <TextField label="Escriba aquí" onKeyDown={enter} onChange={e=>setText(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                fullWidth
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              /></Grid>

          </Grid>
        </Paper>
      </Container>

    </div>
  );
}

export default App;
