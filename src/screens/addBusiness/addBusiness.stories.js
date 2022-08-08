import React from 'react';
import {storiesOf} from '@storybook/react-native';
import AddBusiness from './addBusiness';
import instructions from '../../res/instructions';

const stories = storiesOf('Add Business', module);

stories.add('default view', () => <AddBusiness instructions={instructions} />);
stories.add('data view', () => (
  <AddBusiness
    instructions={instructions}
    data={[
      {
        organizationName: 'test',
        username: 'Mi empresa',
        registrationDate: Date.now(),
        registrationMethod: 1,
      },
    ]}
  />
));
