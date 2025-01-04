'use client'

import { useEffect, useState } from 'react'
import Courses from './components/Courses'
import loadingPage from './loading'
import CourseSearch from './components/CourseSearch'

const HomePage = () => {
	const [courses, setCourses] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchCourses = async () => {
			const res = await fetch(`/api/courses`)
			const data = await res.json()
			setCourses(data)
			setLoading(false)
		}

		fetchCourses()
	}, [])

	if (loading) return <loadingPage />

	return (
		<div>
			<div className='container'>
				<h1>
					Welcome <span>to Traversy Media</span>
				</h1>
			</div>
			<div className='container'>
				<CourseSearch getSearchResults={results => setCourses(results)} />
			</div>
			<Courses courses={courses} />
		</div>
	)
}

export default HomePage
