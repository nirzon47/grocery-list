const Form = ({ handleAddButton }) => {
	return (
		<form className='flex flex-wrap items-center justify-center gap-4 mb-12'>
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
				Add Item
			</button>
		</form>
	)
}

export default Form
