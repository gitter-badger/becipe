define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'Events',
  'text!templates/misc/checkboxTemplate.html'
], function($, _, Backbone, Bootstrap, Events, checkboxTemplate){

	// ISSUES:
	// 1. When the view changes, the filters are not reset.
	// 2. If browser is resized and filters are not in the view 
	// anymore (aka mobile case), it still shows up in url query and and affects the page. 

  var RecipesFilterView = Backbone.View.extend({
    
	events: {
		'change label input': 'clickFilter'
	},

    initialize: function(options) {
		this.model = options.model;
		this.el = options.el;
    },

    render: function(){
		var compiledTemplate = _.template(checkboxTemplate);
		this.$el.html(compiledTemplate({id: this.model.id, desc: this.model.desc, state: this.model.state}));
		Events.on('searchResultsCloseEvent', this.onSearchResultsClose, this);
		return this;
    },
	
	clickFilter: function() {
		this.trigger('clickFilterEvent', {filterId: this.model.id});
	},
	
	onSearchResultsClose: function() {
		this.$el.find('input').prop('checked', false);
	}

  });

  return RecipesFilterView;
  
});