'use strict';

angular.module('angularApp')
	.factory('Firm', function (Entity, GraphHelper, Expression, Uris) {

		// Public API here
		return {
			/**
			 * Finds an Architect by 'name'
			 * @param name
			 * @returns {Promise| Object} All architects that match
			 */
			findByName: function (name) {
				return Entity.findByName(name, 'qldarch:Firm');
			},

			/**
			 * Loads a single Architect
			 * @param uri
			 * @returns {Promise | Object}
			 */
			load: function (uri, summary) {
				return Entity.load(uri, summary);
			},

			/**
			 * Loads all the entities of a certain type
			 * @returns {Promise | Object} All architects
			 */
			loadAll: function () {
				return Entity.loadAll('qldarch:Firm');
			},

			/**
			 * Loads a list of entities
			 * @param uris
			 * @returns {Promise| Object} All architects with uris
			 */
			loadList: function (uris) {
				return Entity.loadList(uris, false);
			}
		};
	});
