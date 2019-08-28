import React from 'react';

function TCard1({feed}) {
  return (
    <div class="card">
      <a href={feed.uri} target="_blank"><img class="card-img-top" src={feed.img} alt="" /></a>
      <div class="card-body">
        <a href={feed.uri} target="_blank"><h5 class="card-title">{feed.title}</h5></a>
        <p class="card-text">{feed.desc}</p>
        <p class="card-text text-right"><small class="text-muted">{feed.date}</small></p>
      </div>
    </div>
  )
}

function TCard2({feed}) {
  return (
    <div class="card p-3">
      <blockquote class="blockquote mb-0 card-body">
        <a href={feed.uri} target="_blank"><p>{feed.desc}</p></a>
        <footer class="blockquote-footer">
          <small class="color-b">{feed.title}</small>
        </footer>
      </blockquote>
    </div>
  )
}

function TCard3({feed}) {
  return (
    <div class="card text-white">
      <div class="bg-color-b p-3 text-center">
        <blockquote class="blockquote mb-0">
          <a href={feed.uri} target="_blank"><p>{feed.desc}</p></a>
          <footer class="blockquote-footer">
            <small>{feed.title}</small>
          </footer>
        </blockquote>
      </div>
      <div class="card-footer text-right">
        <small class="text-muted">{feed.date}</small>
      </div>
    </div>
  )
}

function TCard4({feed}) {
  return (
    <div class="card">
      <a href={feed.uri} target="_blank"><img class="card-img" src={feed.img} alt={feed.title} /></a>
      <div class="card-footer text-right">
        <small class="text-muted">{feed.date}</small>
      </div>
    </div>
  )
}

function TCard5({feed}) {
  return (
    <div class="card p-3">
      <blockquote class="blockquote mb-0">
        <a href={feed.uri} target="_blank"><p>{feed.desc}</p></a>
        <footer class="blockquote-footer">
          <small class="text-muted">{feed.title}</small>
        </footer>
      </blockquote>
    </div>
  )
}

function TCard6({feed}) {
  return (
    <div class="card">
      <div class="card-body">
        <a href={feed.uri} target="_blank"><h5 class="card-title color-b">{feed.title}</h5></a>
        <p class="card-text">{feed.desc}</p>
        <p class="card-text text-right"><small class="text-muted">{feed.date}</small></p>
      </div>
    </div>
  )
}

export default function TNew({title, news}) {
  let arrCard = [
    TCard1, TCard2, TCard3, TCard4, TCard5, TCard6,
    TCard1, TCard2, TCard3, TCard4, TCard5, TCard6,
    TCard1, TCard2, TCard3, TCard4, TCard5, TCard6,
  ]

  function renderGrid() {
    return randomNews().map((feed, i) => {
        let TCard = randomize(arrCard)
        return <TCard feed={feed} />
    })
  }

  function randomNews() {
      var items = [];
      while(items.length < arrCard.length) {
        var item = news[Math.floor(Math.random() * news.length)]
        items.push(item)
      }

      return items
  }

  function randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  return (
    <section class="section-t4">
      <div class="container">
        <div class="row">
        <div class="col-md-12">
          <div class="title-wrap d-flex justify-content-between">
            <div class="title-box">
              <h2 class="title-a">{title}</h2>
            </div>
          </div>
        </div>
      </div>
        <div class="card-columns">{ renderGrid() }</div>
      </div>
    </section>
  )
}