import React, { useState } from 'react'

import { DefaultHookInitValType } from '../types/hooks.types'

const useFormInput = (initVal: DefaultHookInitValType) => {
    const [value, setValue] = useState(initVal)
  
    const onChange = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [value])
  
    return { value, onChange }
}

export default useFormInput