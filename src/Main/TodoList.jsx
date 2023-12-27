import TodoItem from './TodoItem'

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
