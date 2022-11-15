import classname from 'classnames'
import * as React from 'react'

import { InputProps } from '../types/props.types' 

const Input: React.FC<InputProps> = ({ labelText, inputType, inputName, validation, formInputHook, className }: InputProps) => {
  return (
    <div className={classname("space-y-2", className)}>
      <label className="text-gray-700">
        {labelText && labelText}
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          className="block w-full h-full rounded-md border text-gray-600 transition duration-300
                    focus:ring-2 focus:ring-blue-300 focus:outline-none
                    invalid:ring-2 invalid:ring-red-400"
          {...validation}

          {...formInputHook}
        />
      </label>
    </div>
  );
}

export default Input