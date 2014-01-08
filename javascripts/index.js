(function($) {
	

	window.App = {};

	//Model for a project
	App.Project = Backbone.Model.extend({
		defaults: {
			title: "New Project",
			scope: "What I did",
			techs: []
		}
	});

	//A list of Projects
	App.ProjectsCollection = Backbone.Collection.extend({
		model: App.Project

	});

	App.projectsCollection = new App.ProjectsCollection([
		{
			title: "MeUndies", 
			scope: "Homepage Redesign, other updates", 
			techs: ["spree", "jQuery", "Rails"]
		},
		{
			title: "BlockTalk",
			scope: "Blocktalk and stuff having to do with it",
			techs: ["jQuery", "Rails"]
		},
		{
			title: "Penguin Postman",
			scope: "Penguin Postman and stuff having to do with it",
			techs: ["Rails", "Stripe API"]
		}

	]);

	//View for all Projects - Navbar
	App.ProjectsListView = Backbone.View.extend({
		tagName: 'ul',

		// template: _.template( $('.trythis').html() ),

		render: function() {
			// filter through all items in a collection
			// for each, create a new ProjectView
			// append to root element

			this.collection.each(function(project) {
				var projectView = new App.ProjectItemView({ model: project });
				this.$el.append(projectView.render().el);
			}, this);

			return this;
		}
	});

	App.ProjectItemView = Backbone.View.extend({

		className: 'project',

		template: _.template( $('#projectItemView').html() ),

		render: function() {
			var renderedContent = this.template( this.model.toJSON() );
			this.$el.html(renderedContent);
			return this;
		}
	});

	App.projectsListView = new App.ProjectsListView({ collection: App.projectsCollection });
	// $('#projectContainer').append(projectView.render().el)
	$('.projectItemView').append(App.projectsListView.render().el)
	// $(document.body).append(projectsListView.render().el);



})(jQuery);
	