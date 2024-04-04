import { selectCourse, unSelectCourse } from './courseActionCreators';
import { bindActionCreators } from 'redux';

const boundActionCreators = {
  selectCourse,
  unSelectCourse
};

export default bindActionCreators(boundActionCreators, dispatch);
