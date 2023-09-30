import Content from 'components/Course/Content/Content';
import Header from 'components/Course/Header/Header';

const Course = ({ course }) => {
  const { name: courseName, parts: courseParts } = course;

  return (
    <div>
      <Header course={courseName} />
      <Content parts={courseParts} />
    </div>
  );
};

export default Course;
