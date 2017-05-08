"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _ = require('lodash');

var _courses = [];

var CourseStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllAuthors: function() {
		return _courses;
	},

	getCourseById: function(id) {
		return _.find(_courses, {id : id});
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.CREATE_COURSE:
		_courses.push(action.course);
		CourseStore.emitChange();

	}

});

module.exports = CourseStore;
