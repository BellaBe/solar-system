import React from 'react';
import axios from 'axios';


export default class Planets extends React.Component {
  state = {
    planets: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/planets`)
      .then(res => {
        const planets = res.data;
        this.setState({ planets});
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="main">
        <ul className="cards">
        { this.state.planets.map(p => 
        <li className="card" key={p.name}>
          <div className="card-header"></div>
          <div className="card-body">
            <img alt={p.name} src={p.imagePath}/>
            <div className="semitransparent"></div>
          </div>
          <div className="card-footer">
            <div className="card-footer__item medium-caps-font mb">{p.name.toUpperCase()}</div>
            <div className="card-footer__item small-font mb5">Age: {p.age} billion y.</div>
            <div className="card-footer__item small-font">Mass: {p.mass}</div>
          </div>
        </li>)}
      </ul>
      </div>
      
    )
  }
}