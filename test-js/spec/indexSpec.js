var projectData = [{
	title: "Project 1",
	scope: "Scope 1",
	techs: ["Ruby", "Javascript", "Backbone"]

}, {
	title: "Project 2",
	scope: "Scope 2",
	techs: ["Rails", "Spree", "Poop"]
}];

describe("Project", function() {

	beforeEach(function () {
		this.project = new Project(projectData[0]);
	});

	it("creates from data", function() {
		expect(this.project.get("techs").length).toEqual(3);
	});
	
});