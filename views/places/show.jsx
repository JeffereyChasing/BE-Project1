const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ' : 'Rave! '}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
      <main>
      <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>

          <hr />
          <h2> Comments</h2>
          {comments}



          <div className="col-sm-6">
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
              </a>     
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
              </form> 

          
              <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="name">Author</label>
                    <input className="form-control" id="author" name="author" required />
                </div>
                 <div className="form-group">
                    <label htmlFor="pic">Content</label>
                    <input className="form-control" id="content" name="content" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Star</label>
                    <input className="form-control" id="star" name="star" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">Rant</label>
                    <input className="form-control" id="rant" name="rant" />
                </div>
              
                <br></br>
                <input className="btn btn-primary" type="submit" value="submit" />
            </form>

        </div>
      </div>
      </main>
    </Def>
    
    )
}

module.exports = show

