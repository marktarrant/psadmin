"use strict";

var React = require('react');
var CourseApi = require('../../api/courseApi');
var Router = require('react-router');

var Courses = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Courses</h1>

				<table className = "table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						
					</tbody>
				</table>
			</div>

		);

	}

});

module.exports = Courses;