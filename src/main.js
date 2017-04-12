console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { products, FilterableProductTable } from './product';

document.addEventListener('DOMContentLoaded', function() {
  // ReactDOM.render(
  //   React.createElement(Counter),
  //   document.getElementById('mount')
  // );

  ReactDOM.render(
    <Counter />,
    document.getElementById('mount')
  );

  ReactDOM.render(
    <FilterableProductTable products={products} />,
    document.getElementById('container')
  );
});

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
