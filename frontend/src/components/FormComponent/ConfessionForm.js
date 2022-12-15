import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { capitalizeFirstLetter } from '../../utils/helpers';
import DropDownData from './DropDownData.json'
import { usePostConfessions } from '../../Hooks/usePostConfession';


export const ConfessionForm = () => {
  const [ category, setCategory ] = useState('');
  const [ body, setBody ] = useState('')
 
  const { postConfessions, message, isLoading, error } = usePostConfessions();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    postConfessions(category, body);

    setBody('')
    setCategory('')
  }

  return (
    <div className="mt-1 border border-danger rounded">
      {
        message ? 
          <Alert 
            variant="success"
            className="text-center rounded"
          >
            { message }
          </Alert>
        : 
          null
      }
      {
        error ? 
          <Alert variant="danger">{ error }</Alert>
        : 
          null
      }
    <Form 
      onSubmit={handleSubmit}
      className="py-3 px-3 rounded bg-white"
    >
      <Form.Group className="my-3 bg-white rounded">
        <Form.Select
          value={category} 
          onChange={(evt => setCategory(evt.target.value))}
          className="bg-white rounded border border-primary"
        >
          <option>Categories</option>
          {
            DropDownData.map(itm => (
              <option 
                key={itm.value}
                value={itm.value}
              >
                {capitalizeFirstLetter(itm.title)}
              </option>
            ))
            
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 bg-white rounded border border-primary">
        <Form.Label>Confession</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave Your Confession here"
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
          className="bg-white rounded"
        />
      </Form.Group>
      <Button 
        variant="success" 
        type="submit"
        size="sm"
        className="rounded w-100"
        disabled={body !== '' && category !== '' ? false : true}
      >
        Confess
      </Button>
    </Form>
    </div>
  )
}
