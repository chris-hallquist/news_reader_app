RSS.Collections.Feeds = Backbone.Collection.extend({
  url: '/feeds/',
  model: RSS.Models.Feed
});