import './App.css'
import Header from "./components/Header/Header";
import Converter from "./components/Converter/Converter";
import ConversionTable from './components/ConversionTable/ConversionTable';

function App() {
  return (
    <div className='pb-10'>
      <Header title="Temp Converter" />
      <Converter />
      <ConversionTable />
    </div>
  );
}

export default App;
