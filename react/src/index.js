import React from 'react';
import ReactDOM from 'react-dom';
import TNav from './nav';
import TFooter from './footer';
import TGrid from './grid';
import TNew from './news';

ReactDOM.render(<TNav />, document.getElementById('tnav'))
let tgrid = document.getElementById('tgrid');
if (tgrid) {
  fetch(tgrid.getAttribute('data-json'))
  .then(response => response.json())
  .then(json => {
    ReactDOM.render(<TGrid cards={json} />, tgrid)
  })
}

let tnews = document.getElementById('tnews');
if (tnews) {
  fetch('https://asia-east2-firstname-short-url.cloudfunctions.net/widgets/news')
  .then(response => response.json())
  .then(news => {
    ReactDOM.render(<TNew news={news} title="Thị trường bất động sản" />, tnews)
  })
}

ReactDOM.render(<TFooter />, document.getElementById('tfooter'))
