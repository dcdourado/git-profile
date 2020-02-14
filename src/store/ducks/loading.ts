// Action Types
const Actions = {
  REQUEST: 'auth/REQUEST',
  SUCCESS: 'auth/SUCCESS',
  FAILURE: 'auth/FAILURE',
};

// State
interface Loading {
  loading: boolean;
}

export type State = Loading;

const initialState: State = { loading: false };

// Action Creators

export const request = () => ({ type: Actions.REQUEST as typeof Actions.REQUEST });
export const success = () => ({ type: Actions.SUCCESS as typeof Actions.SUCCESS });
export const failure = () => ({ type: Actions.FAILURE as typeof Actions.FAILURE });

type RequestActionType = ReturnType<typeof request>;
type SuccessActionType = ReturnType<typeof success>;
type FailureActionType = ReturnType<typeof failure>;

type ActionTypes = RequestActionType | SuccessActionType | FailureActionType;

// Reducer
const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case Actions.REQUEST:
      return {
        loading: true,
      };
    case Actions.SUCCESS:
      return {
        loading: false,
      };
    case Actions.FAILURE:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
