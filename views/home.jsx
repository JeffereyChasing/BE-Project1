const React = require('react')
const Def = require('./default')


function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>

              <img src = "/images/sunset.jpg" alt = "sunset"/>
              Photo by Andrew Bui --Unsplash
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home

