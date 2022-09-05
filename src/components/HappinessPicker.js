import React, { Component } from "react"
import { emoji } from "../data/data"

export default class HappinessPicker extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div style={{ display: "flex" }}>
          {emoji.map((item, index) => (
            <div key={index}>
              <input
                key={item.id}
                onChange={this.props.handleRating}
                type="radio"
                id={item.id + this.props.name}
                value={item.value}
                name={this.props.name}
                style={{ display: "none" }}
              />
              <label className="emoji" htmlFor={item.id + this.props.name}>
                {item.emoji}
              </label>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
