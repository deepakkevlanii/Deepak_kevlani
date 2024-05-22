import React from 'react'

function Button({ data, link }) {
    return (
        <a className='bg-gradient-to-r from-zinc-950  to-[#232428] text-[#ef233c] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.5),_10px_10px_30px_4px_rgba(0,0,0,0.4)] rounded-md px-5 py-2 font-semibold' href={link}>
            {data}
        </a>
    )


}

export default Button