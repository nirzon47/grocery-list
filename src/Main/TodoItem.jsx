import { FaTrashCan, FaCheck } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const TodoItem = ({ item, data, setData, updateLocalStorage }) => {
	const handleDoneButton = () => {
		const index = data.findIndex((todo) => todo.id === item.id)

		if (index !== -1) {
			const newData = [...data]
			newData.splice(index, 1)

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
		<div className='card w-full bg-zinc-400 shadow-xl image-full h-36'>
			<figure>
				<img
					src={item.imageSrc}
					alt={item.text}
					className={`w-full h-full object-cover ${
						item.status ? 'grayscale opacity-40' : ''
					}`}
				/>
			</figure>
			<div className='card-body justify-between'>
				<h2
					className={`text-xl font-medium capitalize mb-4 ${
						item.status ? 'line-through' : ''
					}`}
				>
					{item.text}
				</h2>
				<div className='card-actions justify-between'>
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
