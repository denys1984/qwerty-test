import React from 'react'
import './header.scss'
import Blockchain from './img/blockchain-logo.jpg'
import Polygraph from './img/polygraph-logo.jpg'

class Header extends React.Component {
	constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
	render() {
		return (
			<header className="header">
				<div className="header__logo">
					<img src={Polygraph} alt=""/>
				</div>
				<div className="header__logo">
					<img src={Blockchain} alt=""/>
				</div>
				<div className="header__time">
					<span>{this.state.date.getHours()}:{this.state.date.getMinutes()}</span>
				</div>
			</header>
		)
	}
}

export default Header;