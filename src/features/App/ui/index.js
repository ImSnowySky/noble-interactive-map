import React from 'react';
import Headbar from '../../Headbar';
import Map from '../../Map';
import { AppView, Loader } from './elements';

const App = ({ pending }) => {
  if (pending) return <Loader />
  else return (
    <AppView>
      <Headbar />
      <Map />
    </AppView>
  )
};

export default App;