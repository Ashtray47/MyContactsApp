'use strict'
var React = require('react');


var Header = React.createClass({
	render: function() {
		return (
			<header>
				<div className="section-content">
					<h1 className="title-header">My Contacts</h1>
				</div>
			</header>
		);
	}
});



module.exports = Header;