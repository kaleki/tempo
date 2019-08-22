import React from 'react';
import PropTypes from 'prop-types';



export const ChoreCard = ({item, onChange, index, onDelete, task, time}) => (
    <div className="col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body">
          {item.isEditing ?
              
              <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Item"
                    value={item.name}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    value={item.price}
                    onChange={event => onChange(event, index)}
                    required
                />
                 <input
                    type="number"
                    name="hours"
                    className="form-control"
                    placeholder="Wage"
                    value={item.hours}
                    onChange={event => onChange(event, index)}
                    required
                />
              </div>
              :
              <div>
                <h4 className="card-title text-center">{item.name}</h4>
                <div className="row justify-content-center mb-4">
                  <p className="card-text">
                    <span className="badge badge">Price</span>
                    <span>${item.price}</span>
                    <span className="badge badge">Hours</span>
                    <span>{item.price/item.hours}</span>
                  </p>
                </div>
              </div>
          }

          <div className="row justify-content-center">
            <div>
              <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onDelete}>
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
);
            

ChoreCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired
  })
};


