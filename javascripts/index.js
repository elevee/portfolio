(function($) {
	window.Project = Backbone.Model.extend({

	});

	window.ProjectView = Backbone.View.extend({
		initialize: function(){
			this.template = _.template( $('#projectView').html() );
		},

		render: function() {
			var renderedContent = this.template(this.model.toJSON());
			$(this.el).html(renderedContent);
			return this;
		}
	});


})(jQuery);
	