"use strict";

var React = require('react');
var Router = require('react-router');

var CourseList = React.createClass({
	propTypes: {
		courses: React.PropTypes.array.isRequired
	},
	
	render: function() {
		var createCourseRow = function(course) {
			return (
					<tr key={course.id}>
						<td><a href = {"/#courses/" + course.id}>{course.id}</a></td>
						<td>{course.title}</td>
						<td>{course.author.name}</td>
						<td>{course.category}</td>
						<td>{course.length}</td>
						<td><a href={course.watchHref}>Watch</a></td>
					</tr>
				);
		};

		return (
			<div>

				<table className = "table">
					<thead>
						<th>ID</th>
						<th>Name</th>
						<th>Author</th>
						<th>Category</th>
						<th>Length</th>
						<th>Watch</th>

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