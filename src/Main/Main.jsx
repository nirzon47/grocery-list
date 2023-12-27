import { useState } from 'react'
import TodoList from './TodoList'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Main = () => {
	const [data, setData] = useState(
		localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
	)

	const handleAddButton = (e) => {
		e.preventDefault()

		setData([
			...data,
			{
				id: Date.now(),
				text: document.getElementById('input-text').value,
				status: false,
			},
		])

		toast.success('Item added!', {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		})

		document.getElementById('input-text').value = ''
	}

	const updateLocalStorage = (data) => {
		localStorage.setItem('data', JSON.stringify(data))
	}

	updateLocalStorage(data)

	return (
		<div>
			<ToastContainer />
			<form className='flex items-center flex-wrap gap-4 justify-center mb-8'>
				<input
					type='text'
					id='input-text'
					className='input input-bordered min-w-64'
				/>
				<button
					className='btn btn-secondary'
					onClick={handleAddButton}
					type='submit'
				>
					Add
				</button>
			</form>
			<div className='grid grid-cols-4 w-full gap-6 h-full'>
				<TodoList
					data={data}
					setData={setData}
					updateLocalStorage={updateLocalStorage}
				/>
			</div>
		</div>
	)
}

export default Main
