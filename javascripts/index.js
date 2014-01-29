(function($) {
	

	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	var vent = _.extend({}, Backbone.Events);

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'project/:id': 'showProject'
		},

		index: function() {
			console.log("Hello from the index page");
		},

		showProject: function(projectId) {
			vent.trigger('project:show', projectId);
		}
	});

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
		model: App.Models.Project,
		firebase: new Backbone.Firebase("http://eleveeportfolio.firebaseio.com/projects")

	});

	var projects = new App.Collections.Projects([
		{
			title: "MeUndies", 
			logo: "meundies_logo.jpg",
			slider: [
					{
						image: "mu-site.png",
						caption: "startin off the hollas"
					},
					{
						image: "mu-site.png",
						caption: "more hollas"
					},
					{
						image: "mu-site.png",
						caption: "fend off the hollas"
					}		
				],
			scope: "Homepage Redesign, other updates", 
			techs: ["spree", "jQuery", "Rails"]
		},
		{
			title: "BlockTalk",
			logo: "blocktalk_logo.png",
			slider: [ 
					{
						image: "mu-site.png",
						caption: "holla at the second caption"
					}
				],
			scope: "Blocktalk and stuff having to do with it",
			techs: ["jQuery", "Rails"]
		},
		{
			title: "Penguin Postman",
			logo: "penguinpostman_logo.jpg",
			slider: [ 
					{
						image: "mu-site.png",
						caption: "additional holla."
					}
				],
			scope: "Penguin Postman and stuff having to do with it",
			techs: ["Rails", "Stripe API"]
		}

	]);

	//View for all Projects - Navbar
	App.Views.ProjectsList = Backbone.View.extend({
		tagName: 'ul',

		initialize: function() {
			vent.on('project:show', this.show, this);
		},

		show: function() {
			console.log('shit be renderin!');
			var proj = this.collection.get("id");
			console.log(this.collection);
			var projView = new App.Views.ProjectDetail({ model: proj });

			console.log( projView.render().el );
		},

		render: function() {
			// filter through all items in a collection
			// for each, create a new ProjectView
			// append to root element

			this.collection.each(function(project) {
				var projectView = new App.Views.ProjectItem({ model: project });
				this.$el.append( projectView.render().el );
			}, this);

			return this;
		}
	});

	App.Views.ProjectItem = Backbone.View.extend({

		className: 'project',

		template: _.template( $('#projectItemView').html() ),

		events: {
			'click': 'displayProject'
		},

		displayProject: function() {
			console.log(this.model.toJSON() );
			var projectDetail = new App.Views.ProjectDetail({ model: this.model });
			// console.log(projectDetail.template( this.model.toJSON() ) );
			// projectView.render().el;
			$('#projectContainer').html( projectDetail.render().el );
			projectDetail.showSlider();

		},

		render: function() {
			var renderedContent = this.template( this.model.toJSON() );
			this.$el.html(renderedContent);
			return this;
		}
	});

	App.Views.ProjectDetail = Backbone.View.extend({

		className: 'project_detail',

		template: _.template( $('#projectView').html() ),

		showSlider: function() {
	        $('#slider').nivoSlider({
	        	effect: 'fade',
	        	prevText: '',
		    	nextText: '',
		    	pauseTime: 5000,
    			pauseOnHover: false
	        });

	        // effect: 'random',               // Specify sets like: 'fold,fade,sliceDown'
		    // slices: 15,                     // For slice animations
		    // boxCols: 8,                     // For box animations
		    // boxRows: 4,                     // For box animations
		    // animSpeed: 500,                 // Slide transition speed
		    // pauseTime: 3000,                // How long each slide will show
		    // startSlide: 0,                  // Set starting Slide (0 index)
		    // directionNav: true,             // Next & Prev navigation
		    // controlNav: true,               // 1,2,3... navigation
		    // controlNavThumbs: false,        // Use thumbnails for Control Nav
		    // pauseOnHover: true,             // Stop animation while hovering
		    // manualAdvance: false,           // Force manual transitions
		    // prevText: 'Prev',               // Prev directionNav text
		    // nextText: 'Next',               // Next directionNav text
		    // randomStart: false,             // Start on a random slide
		    // beforeChange: function(){},     // Triggers before a slide transition
		    // afterChange: function(){},      // Triggers after a slide transition
		    // slideshowEnd: function(){},     // Triggers after all slides have been shown
		    // lastSlide: function(){},        // Triggers when last slide is shown
		    // afterLoad: function(){}         // Triggers when slider has loaded
		},

		render: function() {
			var renderedContent = this.template( this.model.toJSON() );
            this.$el.html(renderedContent);
			return this;
		}
	});

	new App.Router;
	Backbone.history.start();

	// projects.fetch();

	var projectsList = new App.Views.ProjectsList({ collection: projects });
	// $('#projectContainer').append(projectView.render().el)
	$('.projectItemView').append( projectsList.render().el )

	//Drop down for projects
	var $workButton = $(".nav a").first();
	var $workBar = $('.work');
	$workButton.on('click', function(){
		$workBar.slideToggle();	
	});
			
	


})(jQuery);
	