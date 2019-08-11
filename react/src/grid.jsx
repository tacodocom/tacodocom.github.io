import React from 'react';

function TCard({card}) {
  let attr = {
    stretch: 'Diện tích',
    bedroom: 'Phòng ngủ',
    bathroom: 'Nhà tắm',
    parking: 'Bãi giữ xe',
    furniture: 'Nội thất',
    aircon: "Máy lạnh",
    management: "Phí QL"
  }
  let cardInfos = Object.keys(card.layout).map(a => {
    if (a == 'stretch') {
      return (
        <li>
          <h4 class="card-info-title">{attr[a]}</h4>
          <span>{card.layout[a]}m<sup>2</sup></span>
        </li>
      )
    } else {
      return (
        <li key={a}>
          <h4 class="card-info-title">{attr[a]}</h4>
          <span>{card.layout[a]}</span>
        </li>
      )
    }
  })

  return (
    <div class="col-md-4">
      <div class="card-box-a card-shadow">
        <div class="img-box-a">
          <img src={card.img} alt={card.title} class="img-a img-fluid" />
        </div>
        <div class="card-overlay">
          <div class="card-overlay-a-content">
            <div class="card-header-a">
              <h2 class="card-title-a">
                <a href={card.url} target="_blank">{card.title}<br />{card.desc}</a>
              </h2>
            </div>
            <div class="card-body-a">
              <div class="price-box d-flex">
                <span class="price-a">{card.type} | {card.price}</span>
              </div>
            </div>
            <div class="card-footer-a">
              <ul class="card-info d-flex justify-content-around">{cardInfos}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TGrid({cards}) {
  return (
    <section class="property-grid grid">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="grid-option">
              <form>
                <select class="custom-select">
                  <option selected>Tất cả</option>
                  <option value="1">Mới nhất</option>
                  <option value="2">Cho thuê</option>
                  <option value="3">Sang nhượng</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div class="row">{cards.map(c => <TCard key={c.id} card={c} />)}</div>
      </div>
    </section>
  );
}