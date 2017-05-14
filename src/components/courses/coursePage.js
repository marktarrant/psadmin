"use strict";

var React = require('react');
var CourseApi = require('../../api/courseApi');
var Router = require('react-router');
var CourseList = require('./courseList');
var Link = require('react-router').Link;


var CoursePage = React.createClass({
	getInitialState: function() {
		return {
			courses: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ courses: CourseApi.getAllCourses() });
		}
	},

	render: function() {

		return (
			<div>
				<h1>Courses</h1>
				<Link to ="addCourse" className="btn btn-default">Add Course</Link>
				<CourseList courses={this.state.courses} />
			</div>

		);

	}

});

module.exports = CoursePage;