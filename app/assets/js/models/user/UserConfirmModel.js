define([
  'backbone',
  'models/user/UserInputBaseModel'
], function(Backbone, UserInputBaseModel) {

	var UserConfirmModel = UserInputBaseModel.extend({

		defaults: function() {
			return {
				fn: "First Name",
				ln: "Last Name",
				em: "Email Address",
				ps: "Password"
			};
		},
		serverDefaults: function() {
			return {
				fn: "firstName",
				ln: "lastName",
				em: "email",
				ps: "password"
			};
		},
		methodUrl: {
			'save': '/api/0.1/signup/update'
		},
		initialize: function(options) {
			this.token = options.token;
		},
		url: function() {
			return '/api/0.1/signup/token/' + this.token;
		},
		parse : function(response){
			var that = this;
			return _.object(_.keys(that.defaults()), _.map(that.serverDefaults(), function(prop){if(response.hasOwnProperty(prop)) {return response[prop]} else{return ''}}));  
		}    
	});
		
	return UserConfirmModel;

});	