import Link from 'next/link'

const Courses = ({ courses }) => {
	let renderedCourses
	if (courses.length <= 0) {
		renderedCourses = (
			<div className='card'>
				<p
					style={{
						color: 'tomato',
						textAlign: 'center',
						border: '3px solid orange',
						borderRadius: '10px',
						padding: '15px',
						fontWeight: 'bold'
					}}>
					Could not find any course with that title
					<br />
					Please try again
				</p>
			</div>
		)
	} else {
		renderedCourses = courses.map(course => (
			<div key={course.id} className='card'>
				<h2>{course.title}</h2>
				<small>Level: {course.level}</small>
				<p>{course.description}</p>
				<Link href={course.link} target='_blank' className='btn'>
					Go To Course
				</Link>
			</div>
		))
	}
	return <div className='courses'>{renderedCourses}</div>
}
export default Courses
