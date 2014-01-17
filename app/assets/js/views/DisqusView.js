define([
  'backbone',
  'models/user/UserLoginModel'
], function(Backbone, UserLoginModel){

    var DisqusView = Backbone.View.extend({
		
        initialize: function(options) {
			this.identifier = options.identifier;
			this.url = options.url;
			this.title = options.title;
        },

        render: function() {
			
			var view = this;
			
			if(UserLoginModel.isAuthenticated()) {
				$.when($.ajax("/disqus/login")).then(function(data, textStatus, jqXHR){
					view.resetConf(data.message, data.pk);
				});
			} else {
				view.resetConf();
			}
			
			return this;
        },
		
		resetConf: function(message, apiKey) {
			require(['http://becipecom.disqus.com/embed.js'], function(){
				DISQUS.reset({
					reload: true,
					config: function(){
						this.page.identifer = view.identifier;
						this.page.url = view.url;
						this.page.title = view.title;
						//sso
						this.page.remote_auth_s3 = message;
						this.page.api_key = apiKey;
						// This adds the custom login/logout functionality
						this.sso = {
							  name:   "customsso",
							  button: location.host + "/img/favicon.png",
							  icon:   location.host + "/img/favicon.png",
							  url:    location.host + "/disqus/login",
							  logout:  location.host + "/disqus/logout",
							  width:   "800",
							  height:  "400"
						};
					}
				});
			});
		}
    });

    return DisqusView;
});