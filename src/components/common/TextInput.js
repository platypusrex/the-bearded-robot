import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, errors}) => {
	let wrapperClass = 'form-group';
	let inputClass = 'form-control';
	let errorsPresent = (errors && errors.type === name);
	if(errorsPresent) {
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
				onChange={onChange}/>
			{errorsPresent && <div className="form-control-feedback">{errors.message}</div>}
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
	errors: PropTypes.object
};

export default TextInput;