import { useRouter } from 'next/dist/client/router'
import React from 'react'

const User = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="p-5">
            <h1 className="text-center">id: {id}</h1>
        </div>
    )
}

export default User
