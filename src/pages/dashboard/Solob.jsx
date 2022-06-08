import { Button, Form } from '@themesberg/react-bootstrap';
import React from 'react';



export default function () {
    return (
        <> 
        <h1>Fuel expense is 5124 rupees</h1>
        <h3>Enter Your Meal Details</h3>
        <Form>
          <fieldset>
            <Form.Select className="mb-3">
              <Form.Control id="name" placeholder="Enter Your mean" />
              <option>Breakfast</option>
              <option>Launch</option>
              <option>Supper</option>
              <option>Dinner</option>
              <option>All</option>
              </Form.Select>
            <Form.Group className="mb-3">
              <Form.Control id="average" placeholder="Breakfast" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="type" placeholder="Launch" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="price" placeholder="Supper" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="disabledTextInput" placeholder="Dinner" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="disabledTextInput" placeholder="All" />
            </Form.Group>
            <Button type="submit">Show Expense</Button>
          </fieldset>
        </Form>
        <h2>Total Amount of Meal is 5124 rupees</h2>
      </>  
    )
}

