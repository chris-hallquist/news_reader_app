RSS.Views.EntryShow = Backbone.View.extend({
  events: {},

  initialize: function(options){
    this.entry = options.entry;
  },

  render: function(){
    var renderedContent = this.template({
      entry: this.entry
    });
    this.$el.append(renderedContent);
    return this;
  },

  template: JST['entries/show']
});