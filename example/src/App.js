import React, { useState } from 'react';

import { Dialog } from 'react-dialog-tis';
import { Input } from 'react-input-tis';
import { Grid } from '@material-ui/core';
import 'react-dialog-tis/dist/index.css';
import 'react-input-tis/dist/index.css';

const App = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');

  return (
    <div className='App'>
      <div className='Title'>
        Dialog Tis
      </div>
      <button className='Button' onClick={() => setOpen(true)}>
        Open Dialog
      </button>
      <Dialog
        className='Dialog'
        title='GitHub'
        open={open}
        onClose={() => setOpen(false)}
        buttons={[
          {
            text: 'OK',
            onClick: () => setOpen(false)
          }
        ]}
        darkMode={false}
        titleBorder={true}
      >
        <Grid container spacing={3} >
          <Grid item xs={12} md={6}>
            <Input
              label='Name'
              onChange={({ target: { value } }) => setName(value)}
              value={name}
              roundedBorder
              placeholder='Input name'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              label='Family'
              onChange={({ target: { value } }) => setFamily(value)}
              value={family}
              roundedBorder
              placeholder='Input family'
            />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default App;