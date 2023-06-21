import React from 'react';
import s from './CustomInput.module.scss'


const CustomInput = ({...props} : any) => {
	return (
		<input className={s.customInput} {...props} />
	);
};

export default CustomInput;