define(["backbone", "handlebars", "models/Race", "collections/Races", "views/RaceView", "views/RacesView", "views/DetailedRaceView", "models/Planet", "collections/Planets", "views/PlanetView", "views/PlanetsView",  "views/DetailedPlanetView", "events"], function(Backbone, Handlebars, Race, Races, RaceView, RacesView, DetailedRaceView, Planet, Planets, PlanetView, PlanetsView, DetailedPlanetView, Events) {

  var Router = Backbone.Router.extend({
    initialize: function(){
      // Enable different files to call on router.navigate('url', {trigger: true});
      var self = this;
      Events.on("router:navigate", function(url){
        self.navigate(url, {trigger: true});
      });
    },

    routes: {
      "races": "racesIndex",
      "race/:id": "singleRace",
      "planets": "planetsIndex",
      "planet/:id": "singlePlanet",
    },

    _renderView: function(view) {
      $('#main').html(view.render().el);
    },

    racesIndex: function() {
      var races = new Races();
      races.fetch().done(function(response){
        var view = new RacesView({
          collection: races
        });
        $('#main').html(view.render().el);
      });
    },

    singleRace: function(id) {
      var race = new Race({id: id});
      race.fetch().done(response => {
        var view = new DetailedRaceView({model: race});
        $("#main").html(view.render().el);
      });
    },

    planetsIndex: function(){
      var planets = new Planets();
      planets.fetch().done(data => {
        var view = new PlanetsView({
          collection: planets
        });
        this._renderView(view);
      });
    },

    singlePlanet: function(id) {
      var planet = new Planet({
        id: id
      });
      planet.fetch().done(function(response) {
        var view = new DetailedPlanetView({
          model: planet
        });
        $('#main').html(view.render().el);
      });
    }

  });
  return Router;
});
