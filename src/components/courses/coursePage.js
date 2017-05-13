"use strict";

var React = require('react');
var CourseApi = require('../../api/courseApi');
var Router = require('react-router');

var Courses = React.createClass({
	getInitialState: function() {
		return {
			courses: []
		};
	},

	componentWillMount: function() {
		this.setState({ courses: CourseApi.getAllCourses() });
	},

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
				<h1>Courses</h1>

				<table className = "table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.state.courses.map(createCourseRow, this)}
					</tbody>
				</table>
			</div>

		);

	}

});

module.exports = Courses;