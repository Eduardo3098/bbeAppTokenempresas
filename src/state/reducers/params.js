import Config from 'react-native-config';
import instructions from '../../res/instructions';
import {ParamActions} from '../actions';
import {LoadStatus} from '../../common/constants';
import Environments from '../../api/environments';

const INITIAL_STATE = {
  url: Environments.DEFAULT_URL,
  instructions,
  tokenDuration: Environments.DEFAULT_TOKEN_DURATION,
  status: Environments.STARTED,
};

export default function (state = INITIAL_STATE, {type, payload = {}} = {}) {
  switch (type) {
    case ParamActions.FETCH_PARAMS:
      return {
        ...state,
        ...payload,
        status: LoadStatus.DONE,
      };
    default:
      return state;
  }
}
