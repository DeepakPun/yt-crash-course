'use client'
import { useState } from 'react'

const CourseSearch = ({ getSearchResults }) => {
	const [query, setQuery] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()

		const res = await fetch(`/api/courses/search?query=${query}`)

		const courses = await res.json()

		getSearchResults(courses)
	}

	return (
		<form className='search-form' onSubmit={handleSubmit}>
			<input
				type='text'
				value={query}
				onChange={e => setQuery(e.target.value)}
				className='search-input'
				placeholder='Search for a course ...'
			/>
			<button className='search-button' type='submit'>
				Search
			</button>
		</form>
	)
}
export default CourseSearch
