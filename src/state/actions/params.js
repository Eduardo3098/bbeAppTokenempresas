import {fetchParams as fetchParamsService} from '../../api';

const ParamActions = {
  FETCH_PARAMS: 'FETCH_PARAMS',
};

const fetchParams = () => async dispatch => {
  let payload;
  try {
    payload = await fetchParamsService();
  } catch (ignored) {}

  dispatch({type: ParamActions.FETCH_PARAMS, payload});
};

export {ParamActions, fetchParams};
