import client from './client';
import Config from 'react-native-config';

const fetchParams = async () => client.get(Config.BASE_URL);

export {fetchParams};
