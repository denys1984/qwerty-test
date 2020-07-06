import React from 'react';
import './questionblock.scss'

class QuestionBlock extends React.Component {
	render() {
		return (
			<div className="questionblock">

				<form className="questionblock__form" action="" method="">
					<div className="questionblock__title">
						Что произойдет, если entityName будет 
						названием несуществующей таблицы
					</div>
					<textarea className="questionblock__textarea"></textarea>
					<div className="questionblock__checkboxes">
						<div className="questionblock__item">
							<input type="checkbox" id="1"/>
							<label htmlFor="1">консоль выдаст Result = .......</label>
						</div>
						<div className="questionblock__item">
							<input type="checkbox" id="2"/>
							<label htmlFor="2">консоль выдаст Error = .......</label>
						</div>
						<div className="questionblock__item">
							<input type="checkbox" id="3"/>
							<label htmlFor="3">приложение не запустится = .......</label>
						</div>
						<div className="questionblock__item">
							<input type="checkbox" id="4"/>
							<label htmlFor="4">приложение не крашнется = .......</label>
						</div>
					</div>
					<div className="questionblock__sendBtn">
						<input type="submit" value="следующий вопрос"></input>
					</div>
				</form>
			</div>
		)
	}
}

export default QuestionBlock;