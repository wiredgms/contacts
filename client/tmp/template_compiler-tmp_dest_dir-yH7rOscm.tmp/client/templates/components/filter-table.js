import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <tr><th ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'colspan': ("headerFilterColspan")
  },hashTypes:{'colspan': "ID"},hashContexts:{'colspan': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("textFilter"),
    'autofocus': ("autofocus"),
    'placeholder': ("Enter search filter"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'autofocus': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'autofocus': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </th></tr>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <th class=\"checkbox-all\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("allSelected"),
    'checked': ("selectAll")
  },hashTypes:{'type': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</th>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <tr><td ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'colspan': ("headerFilterColspan")
  },hashTypes:{'colspan': "ID"},hashContexts:{'colspan': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><span class=\"label label-danger\">Note:</span> No records exist yet</td></tr>\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, "hasNoFilteredRecords", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }
function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <tr><td ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'colspan': ("headerFilterColspan")
  },hashTypes:{'colspan': "ID"},hashContexts:{'colspan': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><span class=\"label label-warning\">Note:</span> No records match your filter</td></tr>\n");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "r", "in", "filteredRecords", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <tr>\n  ");
  stack1 = helpers['if'].call(depth0, "showCheckboxes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "bodyTemplate", options) : helperMissing.call(depth0, "partial", "bodyTemplate", options))));
  data.buffer.push("\n  </tr>\n");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <td>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("r.selected"),
    'checked': ("r.selected")
  },hashTypes:{'type': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n  ");
  return buffer;
  }

  data.buffer.push("<table class=\"table table-striped table-hovered filtertable\">\n<thead>\n");
  stack1 = helpers['if'].call(depth0, "showTextFilter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<tr>\n");
  stack1 = helpers['if'].call(depth0, "showCheckboxes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "headerTemplate", options) : helperMissing.call(depth0, "partial", "headerTemplate", options))));
  data.buffer.push("\n</tr>\n</thead>\n<tbody>\n");
  stack1 = helpers['if'].call(depth0, "hasNoActualRecords", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</tbody>\n</table>\n");
  return buffer;
  
});
