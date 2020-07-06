import React from 'react';
import './loader.scss'

class Loader extends React.Component {
	render() {
		return (
			<div className="loader">
				<div className="loaderBgLine">
					<div className="loaderBgLine__track loaderBgLine__track_gradient"></div>
				</div>
			</div>
		)
	}
}

export default Loader;