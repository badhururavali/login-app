// Write your code here
import {Component} from 'react'
import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageEl
    let buttonEl
    if (isLogin === true) {
      messageEl = <Message content="Welcome User" />
      buttonEl = <Login changeStatus={this.changeStatus} />
    } else {
      messageEl = <Message content="Please Login" />
      buttonEl = <Logout changeStatus={this.changeStatus} />
    }

    return (
      <div className="home-container">
        <div className="welcome-container">
          {messageEl}
          {buttonEl}
        </div>
      </div>
    )
  }
}

export default Home
