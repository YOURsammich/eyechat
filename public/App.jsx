import * as React from 'react'
import { createRoot } from 'react-dom/client';

console.log(process.env.NODE_ENV)

class App extends React.Component {
  constructor () {
    super();

  }

  render () {
    return (
      <>
        <h1>Hello world</h1>
      </>
    );
  }

}

const root = createRoot(document.getElementById('root'));
root.render(<App />);