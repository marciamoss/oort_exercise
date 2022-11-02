import Header from './Header';
import InstanceTable from './InstanceTable';

function App() {
  return (
    <div className="ui container">
      <Header />
      <div className='ui hidden section divider'>
        <InstanceTable/>
      </div>
    </div>
  );
}

export default App;
