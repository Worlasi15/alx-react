import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginSuccess, loginFailure, loginRequest } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const mockStore = configureMockStore([thunk]);

describe('UI Action Creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN_SUCCESS action on successful login', async () => {
    fetchMock.getOnce('/login-success.json', { status: 200, body: { success: true } });

    const expectedActions = [
      { type: 'LOGIN' },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});
    await store.dispatch(loginRequest('test@example.com', 'password123'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN_FAILURE action on failed login', async () => {
    fetchMock.getOnce('/login-success.json', { status: 401 });

    const expectedActions = [
      { type: 'LOGIN' },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});
    await store.dispatch(loginRequest('test@example.com', 'password123'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
