import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
	let wrapperClass = 'form-group';
	let inputClass = 'form-control';
	if(error && error.length > 0) {
		wrapperClass += ' has-danger';
		inputClass += ' form-control-danger';
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<input
				type="text"
				name={name}
				className={inputClass}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={true}/>
			{error && <div className="form-control-feedback">{error}</div>}
		</div>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	num: PropTypes.number,
	value: PropTypes.string,
	error: PropTypes.string
};

export default TextInput;