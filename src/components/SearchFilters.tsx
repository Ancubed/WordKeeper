import classname from 'classnames'
import React from 'react'

import { SearchFiltersPropsInterface } from '../types/props.types'

const SearchFilters: React.FC<SearchFiltersPropsInterface> = ({
    className,
    onChange,
    value,
}: SearchFiltersPropsInterface) => {
    return (
        <div className={classname('flex select-none', className)}>
            <label>
                Noun
                <input
                    type="checkbox"
                    value="noun"
                    id="noun"
                    checked={value === 'noun'}
                    onChange={onChange}
                    name="filter"
                    className="ml-2"
                />
            </label>
            <label className="ml-4">
                Adjective
                <input
                    type="checkbox"
                    value="adjective"
                    id="adjective"
                    checked={value === 'adjective'}
                    onChange={onChange}
                    name="filter"
                    className="ml-2"
                />
            </label>
            <label className="ml-4">
                Verb
                <input
                    type="checkbox"
                    value="verb"
                    id="verb"
                    checked={value === 'verb'}
                    onChange={onChange}
                    name="filter"
                    className="ml-2"
                />
            </label>
        </div>
    )
}

export default SearchFilters
