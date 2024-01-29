import PropTypes from 'prop-types';

function Students(props) {
  return (
    <div>
      <h1>Student: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Is Student: {props.isStudent ? 'Yes' : 'No'}</h1>
    </div>
  );
}

Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Students.defaultProps = {
    name:'Gust',
    age : 0,
    isStudent : false
}

export default Students;
