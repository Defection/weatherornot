import React from 'react';
import CommuteItem from './CommuteItem.jsx';

class Commutes extends React.Component {
  constructor(props) { // expecting to have commutes, places, addCommuteHandler passed down in props.
    super(props);
    this.state = {
      time: '',
      deptOrArival: '',
      origin: '',
      dept: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  render() {
    return (
      <div>
        <div>
          {this.props.commutes.map(commute =>
          (<CommuteItem
            key={commute.id}
            commute={commute}
          />))}
        </div>
        <div>
          <input
            name="deptOrArival"
            type="checkbox"
            value={this.state.deptOrArival}
            onChange={(e) => { this.onChange(e); }}
          />
          <input
            name="time"
            type="time"
            value={this.state.time}
            onChange={(e) => { this.onChange(e); }}
          />
          <input
            name="origin"
            type="select"
            value={this.state.origin}
            onChange={(e) => { this.onChange(e); }}
          />
          {this.props.places.map(place => (
            <option value={place.name}>{place.name}</option>
          ))}

          <input
            name="dept"
            type="select"
            value={this.state.dept}
            onChange={(e) => { this.onChange(e); }}
          />
          {this.props.places.map(place => (
            <option value={place.name}>{place.name}</option>
            ))}
        </div>
      </div>
    );
  }
}

export default Commutes;
