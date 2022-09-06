const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.places.name }</h1>
          </main>
        </Def>
    )
}

module.exports = show
