import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n  <img src=\"../img/error.svg\" alt=\"Error\"/>\n");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n  <img src=\"../img/alert.svg\" alt=\"Alert\"/>\n");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n  <img src=\"../img/info.svg\" alt=\"Info\"/>\n");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n    <h1>Uh oh.</h1>\n  ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n    <h1>Attention!</h1>\n  ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n    <h1>Hey!</h1>\n  ");
  }

  data.buffer.push("\n");
  stack1 = (helper = helpers.unboundIf || (depth0 && depth0.unboundIf),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "notification.isError", options) : helperMissing.call(depth0, "unboundIf", "notification.isError", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = (helper = helpers.unboundIf || (depth0 && depth0.unboundIf),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "notification.isAlert", options) : helperMissing.call(depth0, "unboundIf", "notification.isAlert", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = (helper = helpers.unboundIf || (depth0 && depth0.unboundIf),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "notification.isInfo", options) : helperMissing.call(depth0, "unboundIf", "notification.isInfo", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"message-area\">\n  ");
  stack1 = (helper = helpers.unboundIf || (depth0 && depth0.unboundIf),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "notification.isError", options) : helperMissing.call(depth0, "unboundIf", "notification.isError", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = (helper = helpers.unboundIf || (depth0 && depth0.unboundIf),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "notification.isAlert", options) : helperMissing.call(depth0, "unboundIf", "notification.isAlert", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = (helper = helpers.unboundIf || (depth0 && depth0.unboundIf),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "notification.isInfo", options) : helperMissing.call(depth0, "unboundIf", "notification.isInfo", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <div class=\"message\">\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "notification.content", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});
