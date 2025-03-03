import React from 'react'

const Dropdown = ({title,options,func}) => {
    return (
      <div className="   max-w-2xs">
        <select 
          onChange={func}
          defaultValue="0" 
          name="format" 
          id="format"
          className="w-30 h-[95%] px-4 py-2 text-purple-300 bg-zinc-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out hover:border-gray-400"
        >
          <option value="0" disabled>
            {title}
          </option>
s
          {options.map((o,i)=>(
            <option key={i} value={o}>
              {o.toUpperCase()}
            </option>
          ))}

        </select>
      </div>
    )
}

export default Dropdown;