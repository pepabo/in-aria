import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>in-aria</h1>
      <div>
        <Select className="selectbox">
          {/* <Label>Favorite Animal</Label> */}
          <Button className="_select">
            <SelectValue />
            <span aria-hidden="true" className="_icon"></span>
          </Button>
          <Popover className="select-dropdown">
            <ListBox className="_list">
              <ListBoxItem className="_item">
                <div>
                  <div className="_body">
                    <div className="_title">Cat</div>
                  </div>
                </div>
              </ListBoxItem>
              <ListBoxItem className="_item">
                <div>
                  <div className="_body">
                    <div className="_title">Dog</div>
                  </div>
                </div>
              </ListBoxItem>
              <ListBoxItem className="_item">
                <div>
                  <div className="_body">
                    <div className="_title">Kangaroo</div>
                  </div>
                </div>
              </ListBoxItem>
            </ListBox>
          </Popover>
        </Select>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
