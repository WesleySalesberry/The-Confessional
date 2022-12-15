import { useState } from 'react'

import Button from 'react-bootstrap/Button';

import { ConfessionForm } from '../FormComponent/ConfessionForm'


export const DisplayForm = () => {
  const [ show, setShow ] = useState(false)
  
  return (
    <div className='my-3 mx-3'>
      <Button
        variant="danger" 
        className="w-100 rounded"
        onClick={() => setShow(!show)}
      >
        Post A Confession
      </Button>
      {
        show ? 
          <ConfessionForm />
        :
          null
      }
    </div>
  )
}