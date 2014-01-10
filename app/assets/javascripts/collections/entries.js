RSS.Collections.Entries = Backbone.Collection.extend({
  url: '/entries/',
  model: RSS.Models.Entry
});