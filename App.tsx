import React from 'react';
import { GlobalStyled } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/User/store';

// Componente Funcional
function App() {
  return (
    <Provider store={store}>
    <Header />

    <ProductsList />

    <GlobalStyled />
  </Provider>
  );
}

export default App;
