import { useState } from 'react'
import TodoList from './TodoList'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Form from './Form'

const Main = () => {
	const [data, setData] = useState(
		localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
	)

	const handleAddButton = async (e) => {
		e.preventDefault()

		const inputText = document.getElementById('input-text').value

		const response = await fetch(
			`https://api.unsplash.com/search/photos?page=1&per_page=1&query=${inputText}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
		)

		const imageSrc = (await response.json()).results[0].urls.regular

		setData([
			...data,
			{
				id: Date.now(),
				text: inputText,
				status: false,
				imageSrc: imageSrc,
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
			<Form handleAddButton={handleAddButton} />
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
