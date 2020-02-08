import React from 'react';
import Headbar from '../../Headbar';
import Map from '../../Map';
import { AppView, Loader, LoaderContainer } from './elements';
import Logo from '../../shared/Logo';
import WidgetLocation from '../../WidgetLocation';
import WidgetMouseCoordinates from '../../WidgetMouseCoordinates';

const App = ({ pending }) => pending
  ? <LoaderContainer>
      <Logo />
      <Loader />
    </LoaderContainer>
  : <AppView>
      <Headbar />
      <Map />
      <WidgetLocation />
      <WidgetMouseCoordinates />
    </AppView>

export default App;