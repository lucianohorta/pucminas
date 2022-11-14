import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Sobrenome" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number"  min="1" placeholder="Número de dias" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Endereço" />
      </FormGroup>

      {/*<FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 day">1 dia</option>
          <option value="2 days">2 dias</option>
          <option value="3 days">3 dias</option>
          <option value="4 days">4 dias</option>
          <option value="5+ days">5+ dias</option>
        </select>
      </FormGroup>
       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup> */}

      <div class="data1-container">

        <div class="pickup1">
          <p>Data do aluguel</p>
          <FormGroup className="booking__form">
            <input type="date" placeholder="Journey Date" />
          </FormGroup>
        </div>

        <div class="pickup2">
          <p>Horário início</p>
          <FormGroup className="booking__form">
            <input
              type="time"
              placeholder="Journey Time"
              className="time__picker"
            />
          </FormGroup>
        </div>

      </div>

      <div class="data2-container">

        <div class="pickup3">
          <p>Data da devolução</p>
          <FormGroup className="booking__form">
            <input type="date" placeholder="Journey Date" />
          </FormGroup>
        </div>

        <div class="pickup4">
          <p>Horário da entrega</p>
          <FormGroup className="booking__form">
            <input
              type="time"
              placeholder="Journey Time"
              className="time__picker"
            />
          </FormGroup>
        </div>

      </div>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Descreva informações adicionais aqui"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
