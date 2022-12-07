import React from "react";
import './Header.css';

function Header(props) {
  function render() {
    return (
      <header className="py-20 mb-10">
        <div className="container mx-auto px-4 max-w-screen-md">
          <h1 className="text-6xl font-bold mb-10">{props.title}</h1>
          <p className='mb-0 text-xl'>This site allows you to quickly and easily convert temperatures between Celsius and Fahrenheit. Simply enter a temperature value in one of the units, and our converter will automatically display the equivalent temperature in the other unit.</p>
        </div>
      </header>
    )
  }

  return render();
}

export default Header;