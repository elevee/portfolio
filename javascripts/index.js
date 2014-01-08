(function($) {
	
	//Model for a project
	var Project = Backbone.Model.extend({
		defaults: {
			title: "New Project",
			scope: "What I did",
			techs: []
		}
	});

	//A list of Projects
	window.ProjectsCollection = Backbone.Collection.extend({
		model: Project

	});

	var projectsCollection = new ProjectsCollection([
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
	window.ProjectsListView = Backbone.View.extend({
		tagName: 'ul',

		// template: _.template( $('.trythis').html() ),

		render: function() {
			// filter through all items in a collection

			this.collection.each(function(project) {
				var projectView = new ProjectItemView({ model: project });
				this.$el.append(projectView.render().el);
			}, this);

			// var el = $('.trythis').html();
			// projectsCollection_.each(project) {
			// 	var proj = new ProjectView(project);
			// 	this.$el. append(proj);
			// };
			// for each, create a new ProjectView
			// append to root element
			return this;
		}
	});

	window.ProjectItemView = Backbone.View.extend({

		className: 'project',

		template: _.template( $('#projectItemView').html() ),

		render: function() {
			var renderedContent = this.template( this.model.toJSON() );
			this.$el.html(renderedContent);
			return this;
		}
	});

	// project = new Project;
	var projectsListView = new ProjectsListView({ collection: projectsCollection });
	// $('#projectContainer').append(projectView.render().el)
	$('.trythis').append(projectsListView.render().el)
	// $(document.body).append(projectsListView.render().el);



})(jQuery);
	