import React from 'react';
import s from './CustomInput.module.scss'

interface CustomInputProps {
	placeholder?: string;
	name?: string;
	type?: string;
}

const CustomInput : React.FC<CustomInputProps> = ({...props}) => {
	return (
		<input className={s.customInput} {...props} />
	);
};

export default CustomInput;