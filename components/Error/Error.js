import React from 'react'
import ErrorWrapper from './ErrorWrapper'

const Error = () => {
    return (
        <ErrorWrapper className="p-3 rounded shadow bg-danger">
            <h3 className="text-white">Error</h3>
        </ErrorWrapper>
    )
}

export default Error
