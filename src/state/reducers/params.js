import Config from 'react-native-config';
import instructions from '../../res/instructions';
import {ParamActions} from '../actions';
import {LoadStatus} from '../../common/constants';

const INITIAL_STATE = {
  url: Config.DEFAULT_URL,
  instructions,
  tokenDuration: Config.DEFAULT_TOKEN_DURATION,
  status: LoadStatus.STARTED,
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
