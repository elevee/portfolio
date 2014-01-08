(function($) {
	

	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	//Model for a project
	App.Models.Project = Backbone.Model.extend({
		defaults: {
			title: "New Project",
			scope: "What I did",
			techs: []
		}
	});

	//A list of Projects
	App.Collections.Projects = Backbone.Collection.extend({
		model: App.Models.Project

	});

	App.Collections.projects = new App.Collections.Projects([
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
	App.Views.ProjectsList = Backbone.View.extend({
		tagName: 'ul',

		// template: _.template( $('.trythis').html() ),

		render: function() {
			// filter through all items in a collection
			// for each, create a new ProjectView
			// append to root element

			this.collection.each(function(project) {
				var projectView = new App.Views.ProjectItem({ model: project });
				this.$el.append(projectView.render().el);
			}, this);

			return this;
		}
	});

	App.Views.ProjectItem = Backbone.View.extend({

		className: 'project',

		template: _.template( $('#projectItemView').html() ),

		render: function() {
			var renderedContent = this.template( this.model.toJSON() );
			this.$el.html(renderedContent);
			return this;
		}
	});

	App.Views.projectsList = new App.Views.ProjectsList({ collection: App.Collections.projects });
	// $('#projectContainer').append(projectView.render().el)
	$('.projectItemView').append(App.Views.projectsList.render().el)
	// $(document.body).append(projectsListView.render().el);



})(jQuery);
	