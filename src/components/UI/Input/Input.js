import React from 'react';
import './Input.css';

function isInvalid({valid, touched, shouldValidate}) {
    console.log(valid, touched, shouldValidate);
    return !valid && shouldValidate && touched;
};

const Input = props => {
   const inputType = props.type || 'text';
   const classses = [
       'Input'
   ];
   const htmlFor = `${inputType}-${Math.random()}`;

   if(isInvalid(props)) {
       classses.push('invalid');
   }

    return (
        <div className={classses.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalid(props) 
                ? <span>{props.errorMessage || 'Неккоректное значение'}</span>
                : null
            }
        </div>
    );
}

export default Input;