"use strict";

var React = require('react');
var Router = require('react-router');

var CourseList = React.createClass({
	
	render: function() {
		var createCourseRow = function(course) {
			return (
					<tr key={course.id}>
						<td><a href = {"/#courses/" + course.id}>{course.id}</a></td>
						<td>{course.title}</td>
					</tr>
				);
		};

		return (
			<div>

				<table className = "table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.courses.map(createCourseRow, this)}
					</tbody>
				</table>
			</div>

		);

	}

});

module.exports = CourseList;