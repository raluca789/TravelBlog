import './Destination.css';
import { Component } from 'react';

class DestinationTemplate extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img_destination1" src={this.props.imgdest1} />
          <img alt="img_destination2" src={this.props.imgdest2} />
        </div>
      </div>
    );
  }
}

export default DestinationTemplate;
