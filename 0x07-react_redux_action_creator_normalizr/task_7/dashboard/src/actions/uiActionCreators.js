import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login()); // Dispatch login action
  try {
    const response = await fetch('/login-success.json');
    if (response.ok) {
      dispatch(loginSuccess()); // Dispatch login success action if API call succeeds
    } else {
      dispatch(loginFailure()); // Dispatch login failure action if API call fails
    }
  } catch (error) {
    dispatch(loginFailure()); // Dispatch login failure action if an error occurs
  }
};
