import React from 'react'

function SocailIcon({ icon, color, url }) {
    return (
        <a 
        className={`bg-gradient-to-r from-zinc-950 to-[#232428] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.5),_10px_10px_30px_4px_rgba(0,0,0,0.4)] font-semibold text-3xl p-1 rounded-md`} 
        href={url}
        target='_blank'
        style={{ color: color }}
    >
        {icon}
    </a>
    )
}

export default SocailIcon