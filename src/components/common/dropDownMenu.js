"use strict";

var React = require('react');

var DropdownMenu = React.createClass({
	render: function(){
		return (
				<div>
				<label htmlFor = "CourseAuthor">Author</label>
				<div className = "dropdown">
				<button className = "form-control dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
					</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">Mark Tarrant</a>
					</div>
				</div>	
				<br/>
				</div>
		);
	}
});

module.exports = DropdownMenu;

