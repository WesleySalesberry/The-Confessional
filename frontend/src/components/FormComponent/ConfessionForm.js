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
    <div className="my-3">
      {
        message ? 
          <Alert variant="success">{ message }</Alert>
        : 
          null
      }
      {
        error ? 
          <Alert variant="danger">{ error }</Alert>
        : 
          null
      }
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Select
          value={category} 
          onChange={(evt => setCategory(evt.target.value))}
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
      <Form.Group className="mb-3">
        <Form.Label>Confession</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave Your Confession here"
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
        />
      </Form.Group>
      <Button 
        variant="success" 
        type="submit"
        size="sm"
        className="rounded w-100"
      >
        Confess
      </Button>
    </Form>
    </div>
  )
}
