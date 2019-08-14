import React from 'react';
import PropTypes from 'prop-types';

export const ChoreCard = ({item,EditItem, onChange, index, onDelete}) => (
    <div className="col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body">
          {item.isEditing
              ?
              <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Wish"
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
                    placeholder="Hours"
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
                    <span className="badge badge-secondary">Price</span>
                    <span>${item.price}</span>
                    <span className="badge badge-secondary">Hours</span>
                    <span>{item.price/item.hours}</span>
                  </p>
                </div>
              </div>
          }

          <div className="row justify-content-center">
            <div>
              <button
                  type="button"
                  className="btn btn-primary"
                  onClick={EditItem}>
                {item.isEditing ? "Save" : "Edit"}
              </button>
              <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
);

ChoreCard.propTypes = {
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};