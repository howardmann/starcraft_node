var app = app || {};

define(["jquery", "backbone", "handlebars", "models/Race", "collections/Races", "views/RaceView", "views/RacesView", "views/DetailedRaceView", "views/RacesForm", "models/Planet", "collections/Planets", "views/PlanetView", "views/PlanetsView", "views/DetailedPlanetView", "events"], function($, Backbone, Handlebars, Race, Races, RaceView, RacesView, DetailedRaceView, RacesForm, Planet, Planets, PlanetView, PlanetsView, DetailedPlanetView, Events) {

  var Router = Backbone.Router.extend({
    initialize: function() {
      // Fetch upon initializing
      app.races = new Races();
      app.races.fetch();

      app.planets = new Planets();
      app.planets.fetch();

      // Enable different files to call on router.navigate('url', {trigger: true});
      var self = this;
      Events.on("router:navigate", function(url) {
        self.navigate(url, {
          trigger: true
        });
      });
    },

    routes: {
      "races": "racesIndex",
      "race/:id": "singleRace",
      "races/new": 'racesNew',
      "planets": "planetsIndex",
      "planet/:id": "singlePlanet",
    },

    renderView: function(view){
      $('#main').hide().html(view.render().el).fadeIn();
    },

    racesIndex: function() {
      var view = new RacesView({collection: app.races});
      this.renderView(view);
    },

    singleRace: function(id) {
      var race = app.races.get(id);
      var view = new DetailedRaceView({model: race});
      this.renderView(view);

      // var self = this;
      // var race = new Race({
      //   id: id
      // });
      // race.fetch().done(function(data){
      //   var view = new DetailedRaceView({
      //     model: race
      //   });
      //   self.renderView(view);
      // });
    },

    racesNew: function(){
      var view = new RacesForm({ collection: app.races });
      this.renderView(view);
      // app.races.fetch().done(function(data){
      //   var view = new RacesForm({
      //     collection: app.races
      //   });
      //   self.renderView(view);
      // })
    },

    planetsIndex: function() {
      var view = new PlanetsView({collection: app.planets});
      this.renderView(view);

      // app.planets = new Planets();
      // app.planets.fetch().done(function(data){
      //   var view = new PlanetsView({collection: app.planets});
      // });
      // var self = this;
      // var planets = new Planets();
      // planets.fetch().done(function(data) {
      //   var view = new PlanetsView({
      //     collection: planets
      //   });
      //   self.renderView(view);
      // });
    },

    singlePlanet: function(id) {
      var planet = app.planets.get(id);
      var view = new DetailedPlanetView({model: planet});
      this.renderView(view);

      // var self = this;
      // var planet = new Planet({
      //   id: id
      // });
      // planet.fetch().done(function(response) {
      //   var view = new DetailedPlanetView({
      //     model: planet
      //   });
      //   self.renderView(view);
      // });
    }

  });
  return Router;
});
