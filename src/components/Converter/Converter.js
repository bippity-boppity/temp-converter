import React from 'react';
import { toCelsius, toFahrenheit } from '../../utils/tempCalcs';

export default class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: 0,
      fahrenheit: 32,
    };

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(event) {
    this.setState({
      celsius: event.target.value,
      fahrenheit: toFahrenheit(event.target.value),
    });
  }

  handleFahrenheitChange(event) {
    this.setState({
      celsius: toCelsius(event.target.value),
      fahrenheit: event.target.value,
    });
  }

  render() {
    return (
      <div className='container mx-auto px-4 max-w-screen-md mb-10'>
        <div className='columns-2'>
          <div>
            <label>
              <span className='block mb-4 text-lg'>Celsius</span>
              <input
                className='shadow px-3 py-4 text-xl w-full border'
                type="number"
                value={this.state.celsius}
                onChange={this.handleCelsiusChange}
              />
            </label>
          </div>
          <div>
            <label>
              <span className='block mb-4 text-lg'>Fahrenheit</span>
              <input
                className='shadow px-3 py-4 text-xl w-full border'
                type="number"
                value={this.state.fahrenheit}
                onChange={this.handleFahrenheitChange}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
