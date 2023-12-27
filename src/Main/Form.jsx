const Form = ({ handleAddButton }) => {
	return (
		<form className='flex items-center flex-wrap gap-4 justify-center mb-12'>
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
	)
}

export default Form
