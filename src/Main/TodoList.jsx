import TodoItem from './TodoItem'

/**
 * Renders a list of todo items.
 *
 * @param {Object[]} data - An array of todo items.
 * @param {Function} setData - A function to update the todo items data.
 * @param {Function} updateLocalStorage - A function to update the local storage.
 * @return {JSX.Element} - The rendered list of todo items.
 */
const TodoList = ({ data, setData, updateLocalStorage }) => {
	return (
		<>
			{data.map((item) => (
				<TodoItem
					key={item.id}
					item={item}
					data={data}
					setData={setData}
					updateLocalStorage={updateLocalStorage}
				/>
			))}
		</>
	)
}

export default TodoList
