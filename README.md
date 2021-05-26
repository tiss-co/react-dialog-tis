# react-dialog-tis

>

[![NPM](https://img.shields.io/npm/v/react-dialog-tis.svg)](https://www.npmjs.com/package/react-dialog-tis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![react-dialog-tis Banner](https://user-images.githubusercontent.com/76048512/119642279-c901a280-be2f-11eb-8ba1-7a2827666734.gif)

## Install

```bash
npm i react-dialog-tis
```

or

```bash
yarn add react-dialog-tis
```

## Usage

```jsx
import React, { useState } from 'react'

import { Dialog } from 'react-dialog-tis'
import 'react-dialog-tis/dist/index.css'

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='App'>
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
      >
        //Your Component
      </Dialog>
    </div>
  )
}

export default App
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
