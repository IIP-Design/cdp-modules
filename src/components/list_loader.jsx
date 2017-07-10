import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

const ListLoader = () => (
  <Dimmer active inverted>
    <Loader inverted>Loading</Loader>
  </Dimmer>
);

export default ListLoader;
