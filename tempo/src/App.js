import React from 'react';
import App2 from './App2';
import { useAuth0 } from "./react-auth0";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div>
      <App2 />
    </div>
  )
}

export default App;