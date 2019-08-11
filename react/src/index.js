import React from 'react';
import ReactDOM from 'react-dom';
import TNav from './nav';
import TFooter from './footer';
import TGrid from './grid';

ReactDOM.render(<TNav />, document.getElementById('tnav'))
let tgrid = document.getElementById('tgrid');
if (tgrid) {
  fetch('/js/jamila.json')
  .then(response => response.json())
  .then(json => {
    ReactDOM.render(<TGrid cards={json} />, tgrid)
  })
}
ReactDOM.render(<TFooter />, document.getElementById('tfooter'))
