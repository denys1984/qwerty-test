import React from 'react';
import Header from './header/header';
import Loader from './loader/loader';
import QuestionBlock from './questionBlock/questionblock';

class TestPage extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Loader />
				<QuestionBlock />
			</div>
		)
	}
}

export default TestPage;