import React, { Component } from 'react';

class Map extends Component {
	state = {};
	render() {
		return (
			<iframe
				title="as"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.5523564618416!2d-9.262188684263576!3d39.09389304294203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f2dc110de9711%3A0x551f7691ff547472!2sPizzaria%20Don%20Romero!5e0!3m2!1sen!2spt!4v1590552479691!5m2!1sen!2spt"
				width="100%"
				height="450"
				frameborder="0"
				style={{ border: 0 }}
				allowfullscreen=""
				aria-hidden="false"
				tabindex="0"
			/>
		);
	}
}

export default Map;
