// import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import EditableTable from './components/table';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <EditableTable />
      </div>
    </Provider>
  );
};

export default App;
