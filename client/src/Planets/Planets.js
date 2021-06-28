import React from 'react';

import axios from 'axios';

export default class Solar extends React.Component {
  state = {
    bodies: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/planets`)
      .then(res => {
        console.log(res.data)
        const bodies = res.data;
        
        this.setState({ bodies});
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="main">
        <ul className="cards">
        { this.state.bodies.map(body => 
        <li className="card" key={body.name}>
          <div className="card-header"></div>
          <div className="card-body">
            <img alt={body.name} src={body.imagePath}/>
            <div className="semitransparent"></div>
          </div>
          <div className="card-footer">
            <div className="card-footer__item medium-caps-font mb">{body.name.toUpperCase()}</div>
            <div className="card-footer__item small-font mb5">Age: {body.age} billion y.</div>
            <div className="card-footer__item small-font">Mass: {body.mass}</div>
          </div>
        </li>)}
      </ul>
      </div>
      
    )
  }
}