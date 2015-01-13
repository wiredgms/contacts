import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['filter-table'] || (depth0 && depth0['filter-table']),options={hash:{
    'content': ("model"),
    'columnNum': (2),
    'showCheckboxes': (false),
    'filterField': ("fullName"),
    'bodyTemplate': ("table-body"),
    'headerTemplate': ("table-header")
  },hashTypes:{'content': "ID",'columnNum': "INTEGER",'showCheckboxes': "BOOLEAN",'filterField': "STRING",'bodyTemplate': "STRING",'headerTemplate': "STRING"},hashContexts:{'content': depth0,'columnNum': depth0,'showCheckboxes': depth0,'filterField': depth0,'bodyTemplate': depth0,'headerTemplate': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "filter-table", options))));
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});
