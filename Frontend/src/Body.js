import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Body() {
  const [translateFrom, setTranslateFrom] = useState('');
  const [translateTo, setTranslateTo] = useState(null);
  const [translation, setTranslation] = useState('');
  const [textToTranslate, setTextToTranslate] = useState(null);
  const url = 'http://localhost:5000/translate?';

  const handleTranslateFrom = (event) => {
    setTranslateFrom(event.target.value);
  };

  const handleTranslateTo = (event) => {
    setTranslateTo(event.target.value);
  };

  const handleTextToTranslate = (event) => {
    setTextToTranslate(event.target.value);
  };

  const handleTranslation = () => {
    if (!translateTo) {
      alert('Please choose a language to translate to');
      return;
    }

    if (!textToTranslate) {
      alert('Please write something to translate');
      return;
    }

    const urlToFetch = `${url}from=${translateFrom}&to=${translateTo}`;
    fetch(urlToFetch, {
      method: 'POST', 
      body: textToTranslate,
    })
    .then((response) => response.text())
    .then((data) => {
      setTranslation(data);
    })
    .catch((error) => {
      console.error(error);
    });
  };

return (
  <div className="flex h-screen">
    {/* Form on the left */}
    <div className="flex items-center justify-center w-1/2">
        <div className="mr-4">
        <Form>
          <Form.Group>
            <Form.Label>Translate from</Form.Label>
            <Form.Control as="select" onChange={handleTranslateFrom}>
              <option value="">Detect language</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
              <option value="es">Spanish</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Text to translate</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleTextToTranslate}/>
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" className='mt-2' onClick={() => handleTranslation()}>
          Translate
        </Button>
        </div>
    </div>

    {/* Form on the right */}
    <div className="flex items-center justify-center w-1/2">
        <div className="ml-4">
          <Form>
            <Form.Group>
              <Form.Label>Translate to</Form.Label>
              <Form.Control as="select" onChange={handleTranslateTo}>
                <option>Choose a language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ar">Arabic</option>
                <option value="es">Spanish</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Text translated</Form.Label>
              <Form.Control as="textarea" rows={3} readOnly value={translation} />
            </Form.Group>
          </Form>
        </div>
    </div>
  </div>
);
}

export default Body;