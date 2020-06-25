import React, { useState, useRef } from 'react';
import Chevron from './Chevron';

import './Accordion.scss';

function Accordion(props) {
	const [setActive, setActiveState] = useState('');
	const [setHeight, setHeightState] = useState('0px');
	const [setRotate, setRotateState] = useState('accordion__icon');

	const content = useRef(null);

	function toggleAccordion() {
		setActiveState(setActive === '' ? 'active' : '');
		setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
		setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
	}

	return (
		<div className="accordion__section">
			<div className={`accordion ${setActive}`} onClick={toggleAccordion} id="accordion">
				<p className="accordion__title">{props.title}</p>
				<Chevron className={`${setRotate}`} width={10} fill={'#777'} />
			</div>
			<div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
				<div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
			</div>
		</div>
	);
}

export default Accordion;
