import React from 'react';
import { useState } from 'react';
import { settings } from './passwordSettings';
import { generatePassword } from './generatePassword';
import { CopyAlert } from './copyAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

function App() {
const [copy, setCopy] = useState(false)  
const [Password, setPassword] = useState("")  
const [length, setLength] = useState("4")
const [values, setValues] = useState({
  Lowercase: true,
  Uppercase: false,
  Numbers: false,
  Symbols: false,
  ExcludeDuplicate: false,
  Specialchars: false
})

const handleSubmit = (e) => {
e.preventDefault();
navigator.clipboard.writeText(Password);
setPassword(generatePassword({values,length}))
}


const handleCopy = () => {
  navigator.clipboard.writeText(Password);
  if(!copy){
  setTimeout(() => { 
    setCopy(false)
}, 3000);
  setCopy(true)
}
}

  return (
    <div className="grid w-screen place-items-center h-screen bg-emerald-200 bg-[url('../public/dark.jpg')]">
     {copy && <CopyAlert/>}   
     <div className="card h-[420px] w-[450px] bg-base-100 opacity-90 shadow-xl">
     <form onSubmit={(e) => handleSubmit(e)}>
        <div className="card-body min-w-fit">
          <h2 className="card-title mb-2">Generate Password</h2>
          <div className='flex relative'>
            <input type="text" value={Password} disabled className="input input-bordered w-full min-w-fit" />
            {Password && (<FontAwesomeIcon icon={faCopy} className="cursor-pointer absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#570DF8] hover:text-indigo-600" size='lg' onClick={() => handleCopy()}/>)}
          </div>
          <div className='flex'>
           <span>Password Length:</span>
           <p className='flex justify-end'>{length}</p>
          </div>
          <input 
            type="range" 
            min="3" 
            max="20" 
            step='1' 
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='range range-xs range-primary mt-2'/> 
          <span>Password settings:</span>
          <div className="grid grid-cols-2 gap-4 mt-2">
          {settings && Object.keys(settings).map((key) => {
              if (key !== 'Lowercase') {
                return (
                  <div key={key} className='mx-3'>
                   <label>
                    <input 
                      type="checkbox" 
                      name={key}
                      className='accent-primary' 
                      onChange={(e) => setValues({...values, [e.target.name]:  e.target.checked})}
                    />          
                      <span className="ml-3">{key}</span>
                    </label>
                  </div> 
                  )
                }
                return (               
                  <div key={key}className='mx-3'>
                    <label>
                      <input 
                        type="checkbox" 
                        disabled 
                        checked
                        />          
                        <span className="ml-3">Lowercase</span>
                    </label>
                  </div>
            )})}
          </div>
          <div className="card-actions justify-center mt-5">
            <button type="submit" className="btn btn-primary min-w-full">Generate Password</button>
          </div>
        </div>
        </form>
      </div>
    </div> 
  
  );
}

export default App;
