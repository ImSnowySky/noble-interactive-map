import React from 'react';
import Sidebar from '../Sidebar';
import Map from '../Map';
import { AppContainer } from './elements';

const App = () => (
  <AppContainer>
    <Sidebar />
    <Map />
  </AppContainer>
);

export default App;