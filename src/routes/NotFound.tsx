import classname from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { DefaultPropsInterface } from '../types/props.types'

const NotFound: React.FC<DefaultPropsInterface> = ({
    className,
}: DefaultPropsInterface) => {
    return (
        <div className={classname('', className)}>
            <div>404</div>
            <Link to="/" className="">
                На главную
            </Link>
        </div>
    )
}

export default NotFound
