import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';

describe('Course Reducer', () => {
  // Test default state
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  // Test FETCH_COURSE_SUCCESS action
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const initialState = [];
    const coursesData = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: coursesData
    };
    const expectedState = coursesData.map(course => ({
      ...course,
      isSelected: false
    }));
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  // Test SELECT_COURSE action
  it('should handle SELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false },
      { id: 2, name: 'Webpack', isSelected: false },
      { id: 3, name: 'React', isSelected: false }
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false },
      { id: 2, name: 'Webpack', isSelected: true },
      { id: 3, name: 'React', isSelected: false }
    ];
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  // Test UNSELECT_COURSE action
  it('should handle UNSELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false },
      { id: 2, name: 'Webpack', isSelected: true },
      { id: 3, name: 'React', isSelected: false }
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false },
      { id: 2, name: 'Webpack', isSelected: false },
      { id: 3, name: 'React', isSelected: false }
    ];
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
