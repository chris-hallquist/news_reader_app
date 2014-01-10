RSS.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds/",

  parse: function(data) {
    var entries = data.entries;
    data.entries = new RSS.Collections.Entries(entries);
    return data;
  }
});