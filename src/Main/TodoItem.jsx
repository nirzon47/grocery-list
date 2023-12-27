import { FaTrashCan, FaCheck } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const TodoItem = ({ item, data, setData, updateLocalStorage }) => {
	/**
	 * Handles the click event of the "Done" button.
	 *
	 * @return {void}
	 */
	const handleDoneButton = () => {
		const index = data.findIndex((todo) => todo.id === item.id)

		// If index is found, update the status of the item
		if (index !== -1) {
			const newData = [...data]
			// Remove the item from the array
			newData.splice(index, 1)

			// Adds to the front or back depending on the status
			if (item.status) {
				newData.unshift({ ...item, status: false })
			} else {
				newData.push({ ...item, status: true })
			}

			toast.info('Item status updated', {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})

			setData(newData)
			updateLocalStorage(newData)
		}
	}

	/**
	 * Deletes the item from the data array and updates the state and local storage.
	 *
	 * @param {none} none - This function does not take any parameters.
	 * @return {none} This function does not return any value.
	 */
	const handleDeleteButton = () => {
		const index = data.findIndex((todo) => todo.id === item.id)

		if (index !== -1) {
			const newData = [...data]
			newData.splice(index, 1)

			toast.error('Item deleted', {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})

			setData(newData)
			updateLocalStorage(newData)
		}
	}

	return (
		<div className='w-full shadow-xl card bg-zinc-400 image-full h-36'>
			<figure>
				<img
					src={item.imageSrc}
					alt={item.text}
					className={`w-full h-full object-cover ${
						item.status ? 'grayscale opacity-40' : ''
					}`}
				/>
			</figure>
			<div className='justify-between card-body'>
				<h2
					className={`text-xl font-medium capitalize mb-4 ${
						item.status ? 'line-through' : ''
					}`}
				>
					{item.text}
				</h2>
				<div className='justify-between card-actions'>
					<button className='btn btn-success btn-sm' onClick={handleDoneButton}>
						<FaCheck className='text-xl' />
					</button>
					<button
						className='btn btn-error btn-sm '
						onClick={handleDeleteButton}
					>
						<FaTrashCan className='text-xl' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default TodoItem
