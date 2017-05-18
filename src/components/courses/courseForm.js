"use strict";

var React = require('react');

var CourseForm = React.createClass({
	render: function() {
		
		return (
			<form>
				<h1>Manage Course</h1>
				<label htmlFor="CourseTitle">Course Title</label>
				<input type="text"
					title="courseTitle"
					className="form-control"
					placeholder="Course Title"
					ref="courseTitle"
					value="" />
				<br/>

				<label htmlFor = "CourseAuthor">Author</label>
				<div className = "dropdown">
				<button className = "form-control dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
					</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">Mark Tarrant</a>
					</div>
				</div>	
				<br/>

				<label htmlFor="CourseCategory">Course Category</label>
				<input type="text"
					title="courseCategory"
					className="form-control"
					placeholder="Course Category"
					ref="courseCategory"
					value="" />
				<br/>

				<label htmlFor="CourseLength">Course Length</label>
				<input type="text"
					title="courseLength"
					className="form-control"
					placeholder="Course Length"
					ref="courseLength"
					value="" />
				<br/>




				<input type="submit" value="Save" className = "btn btn-default"/>
			</form>
		);
	}
});

module.exports = CourseForm;