import React, { Component } from "react"
import HappinessPicker from "./HappinessPicker"

export default class OverallFeedback extends Component {
  state = { foodRating: 0, serviceRating: 0, valueRating: 0 }

  setRating = (val, name) => {
    if (name === "food") {
      this.setState({ foodRating: parseInt(val) })
    } else if (name === "service") {
      this.setState({ serviceRating: parseInt(val) })
    } else {
      this.setState({ valueRating: parseInt(val) })
    }
  }

  render() {
    //destruction this.state
    const { foodRating, serviceRating, valueRating } = this.state

    return (
      <div className="center">
        <h1>Let us know how we did!</h1>
        <HappinessPicker
          handleRating={(e) => this.setRating(e.target.value, "food")}
          name="Foods"
        />
        <HappinessPicker
          handleRating={(e) => this.setRating(e.target.value, "service")}
          name="Service"
        />
        <HappinessPicker
          handleRating={(e) =>
            this.setRating(e.target.value, "value for money")
          }
          name="Value for money"
        />
        <h2>
          Total Score: {foodRating + serviceRating + valueRating}
          /12
        </h2>
      </div>
    )
  }
}
