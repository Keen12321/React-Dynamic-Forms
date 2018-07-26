import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    stuff: [],
    id: '',
    type: '',
    label: '',
    icon: '',
    options: [],
    country: '',
    abbr: ''
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      console.log(resp.data)

      this.setState({
        stuff: resp.data,
        id: resp.data.id,
        type: resp.data.type,
        label: resp.data.label,
        icon: resp.data.icon,
        options: resp.data.options,
        country: resp.data.options.label,
        abbr: resp.data.options.value
      })
    })

      // this.state.stuff.map((item) => {
      // this.setState({
      //   id: item.id,
      //   type: item.type,
      //   label: item.type,
      //   icon: item.icon
      // })
    // }) 
  }

  render() {
    return (
      <div>
        <form>
         {this.state.stuff.map(data => (
              data.type === 'text' | data.type === 'email' | data.type === 'tel' ? <input key={data.id} type={data.type} placeholder={data.label}/>
                : data.type === 'select' ? <select key={data.id} id={data.id} placeholder={data.label}>
                {this.state.options.map(items => 
                  {<option value={items.abbr}></option>})}</select>
                : <textarea key={data.id} placeholder={data.label}></textarea>
            ))}
        </form>
      </div>
    )
  }
}

export default App
