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


	project = new Project({title: "MeUndies", scope: "Homepage Redesign, other updates", techs: ["spree", "jQuery", "Rails"]});
	projectView = new ProjectView({model: project});
	$('#projectContainer').append(projectView.render().el)


})(jQuery);
	