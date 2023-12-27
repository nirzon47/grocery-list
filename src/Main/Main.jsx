import { useState } from 'react'
import TodoList from './TodoList'

const Main = () => {
	const [data, setData] = useState(
		localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
	)

	const handleAddButton = () => {
		setData([
			...data,
			{
				id: Date.now(),
				text: document.getElementById('input-text').value,
				status: false,
			},
		])

		document.getElementById('input-text').value = ''
	}

	localStorage.setItem('data', JSON.stringify(data))

	return (
		<div className='flex items-center flex-wrap gap-4 justify-center'>
			<input
				type='text'
				id='input-text'
				className='input input-bordered min-w-64'
			/>
			<button className='btn btn-secondary' onClick={handleAddButton}>
				Add
			</button>

			<TodoList />
		</div>
	)
}

export default Main
