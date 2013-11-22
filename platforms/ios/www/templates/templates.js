(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['commentunit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"question_background\">\r\n<h4 style=\"color:white\">If you have any additional comments, please share them here:</h4> \r\n<textarea rows=\"4\" class=\"span12\" id=\"comment\"></textarea>\r\n</div>\r\n<div class=\"percent-spacer\"></div>";
  });
templates['entrieslist'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " Within ";
  if (stack1 = helpers.radius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.radius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Kilometers ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return " worldwide ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "  \r\n	      \r\n\r\n		<h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n	    <table class=\"table table-bordered linktable\" style=\"color:white;\">\r\n		    <tr class=\"meta\">\r\n			    <td>Name</td>\r\n			    <td>Score</td>\r\n		    </tr>\r\n\r\n			";
  stack1 = helpers.each.call(depth0, depth0.entries, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n		</table>\r\n\r\n    	<div class=\"spacer10\"></div>\r\n		";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			";
  stack1 = helpers.unless.call(depth0, depth0.more, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			    <tr class=\"entry\" id=\"";
  if (stack1 = helpers.path) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n					    <td><a href=\"viewratingfromtemplate.html\"><h5>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5></a></td>  \r\n					    <td><h5>";
  if (stack1 = helpers.avg) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avg; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5></td> \r\n			    </tr>\r\n			";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<tr class=\"more\" id=\"";
  if (stack1 = helpers.table) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.table; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n				<td colspan=\"2\">\r\n					<h5>More...</h5>\r\n				</td>\r\n			</tr>\r\n			";
  return buffer;
  }

  stack1 = self.invokePartial(partials.header, 'header', depth0.title, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row-fluid\">\r\n        <div class=\"span8 offset2 question_background\">\r\n        	<h4>Viewing ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Locations";
  stack1 = helpers.unless.call(depth0, depth0.infiniteRadius, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\r\n        	   <div class=\"btn-group\">\r\n                <button class=\"btn btn-primary\">Options</button>\r\n                <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n                  <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"resultslistfromtemplate.html\">Alter Search Settings</a></li> \r\n                    <li><a href=\"selectlandingread.html\">Choose a New Starting Point</a></li>\r\n                    <li><a href=\"mapentries.html\">View Results as Map</a></li>\r\n                </ul>\r\n                </div>\r\n      	    </div>\r\n    </div>\r\n   	<div class=\"spacer10\"></div>\r\n	    <div class=\"row-fluid\">\r\n	      <div class=\"span8 offset2 question_background\">   \r\n	      ";
  stack1 = helpers.each.call(depth0, depth0.categories, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n		    </div>\r\n		</div>\r\n	\r\n</div>\r\n\r\n";
  stack1 = self.invokePartial(partials.modal, 'modal', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", functionType="function", escapeExpression=this.escapeExpression;


  buffer += "     <div class=\"navbar navbar-fixed-top\">\r\n          <div class=\"navbar-inner\">\r\n\r\n            <div class=\"container-fluid\" id=\"header-container\">\r\n            \r\n              <button type=\"button\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n              </button>\r\n\r\n              <div id=\"back-btn\"> <button class=\"btn btn-primary\" onClick=\"history.go(-1);return true;\">BACK</button> </div>\r\n              <a id=\"page-title\" class=\"brand\" href=\"#\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a>\r\n\r\n              <div class=\"nav-collapse collapse\">\r\n                <ul class=\"nav\">\r\n                  <li><a href=\"index.html\">Home   <span class=\"icon-home\"></span></a></li>\r\n                  \r\n\r\n                  <li> <a id=\"font-button\">Change Font Size  <span class=\"icon-font\"></span></a></li>\r\n                  <li> <a href=\"feedback.html\" id=\"feedback-button\">Give Feedback  <span class=\"icon-thumbs-up\"></span></a></li>\r\n                  <li> <a href=\"#myModal\" data-toggle=\"modal\">About Age-CAP</a></li>\r\n                </ul>\r\n              </div><!--/.nav-collapse -->\r\n\r\n            </div>\r\n          </div>\r\n        </div>";
  return buffer;
  });
templates['hello'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<p>Hello ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifisOdd),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "ifisOdd", depth0, options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });
templates['modal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"myModal\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">  \r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r\n            <h3 id=\"myModalLabel\">About Age-CAP</h3>\r\n          </div>\r\n          <div id=\"ModalText\" class=\"modal-body\">\r\n            <p style=\\'text-align:justify\\'>Age-CAP is a smartphone application which aims to create a crowd-sourced database of age-friendly locations. It consists of survey styled forms which enable users to quickly rate a location. Users are also able to browse this database to assess the age-friendliness of locations in their neighborhood, providing them access to information which was otherwise unavailable. <br><br>Age-CAP was created by a multi-disciplinary team from the Toronto Rehabilitation Institute, University Health Network and University of Toronto.<br><br>Feedback or questions: iatsl@utoronto.ca</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\r\n          </div>\r\n        </div>";
  });
templates['questionunit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "		<div class=\"question_background\">\r\n	                <div class=\"row-fluid\">\r\n	                        <h4 style=\"color:white\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</h4>\r\n	                        <div class=\"spacer5\"></div>\r\n	                </div>\r\n\r\n	                <div class=\"row-fluid\">\r\n	                    <div class=\"btn-group btn-group-vertical\" data-toggle=\"buttons-radio\" id=\"group";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getNumber),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "getNumber", depth0, options)))
    + "\">\r\n	                        <div class=\"btn-group\">\r\n	                            <button class=\"btn btn-large btn-primary\"> 1 </button>                         \r\n	                            <button class=\"btn btn-large btn-primary\"> 2 </button>                         \r\n	                            <button class=\"btn btn-large btn-primary\"> 3 </button>                         \r\n	                            <button class=\"btn btn-large btn-primary\"> 4 </button>                         \r\n	                            <button class=\"btn btn-large btn-primary\"> 5 </button>\r\n	                        </div>\r\n	                        <!--<div class=\"percent-spacer\"></div>-->\r\n	                        <button class=\"btn btn-large btn-primary\"> Not Applicable </button>\r\n	                    </div>\r\n	                </div>\r\n	 \r\n	            </div>\r\n	            <div class=\"percent-spacer\"></div>";
  return buffer;
  });
templates['radiusform'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\r\n                      <br><br>\r\n                      <label class=\"radio inline\" for=\"radio4\">\r\n                        <input type=\"radio\" id=\"radio4\" name=\"radius_group\" value=\"all\"> Worldwide\r\n                      </label>\r\n                      ";
  }

  buffer += "<form style=\"margin:0\" class=\"form-search\">\r\n                    <label class=\"control-label\"><h4>Find a location within...</h4></label>\r\n                    <div class=\"controls\">\r\n                      <label class=\"radio inline\" for=\"radio1\">\r\n                        <input type=\"radio\" id=\"radio1\" name=\"radius_group\" value=\"10\"> 10 km\r\n                      </label>\r\n                      <label class=\"radio inline\" for=\"radio2\">\r\n                        <input type=\"radio\" id=\"radio2\" name=\"radius_group\" value=\"20\"> 20 km\r\n                      </label>\r\n                      <label class=\"radio inline\" for=\"radio3\">\r\n                        <input type=\"radio\" id=\"radio3\" name=\"radius_group\" value=\"50\"> 50 km\r\n                        </label>\r\n\r\n                      ";
  stack1 = helpers.unless.call(depth0, depth0.infiniteRadius, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                      <br><br>\r\n                     <button type=\"submit\" id=\"apply\" class=\"btn btn-primary\" >Apply</button>\r\n                    </div> \r\n</form>\r\n";
  return buffer;
  });
templates['ratingform'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n	   ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.ifisOdd),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "ifisOdd", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n	   ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.ifisEven),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "ifisEven", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	   ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	   	<div class=\"row-fluid\">\r\n        <div class=\"span4 offset2\">\r\n        ";
  stack1 = self.invokePartial(partials.questionunit, 'questionunit', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n	   ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	   	<div class=\"span4\">\r\n	   	";
  stack1 = self.invokePartial(partials.questionunit, 'questionunit', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	   	</div></div>\r\n	   ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	   <div class=\"span4\">\r\n	    ";
  stack1 = self.invokePartial(partials.commentunit, 'commentunit', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	   </div></div>\r\n\r\n	   <div class=\"row-fluid\">\r\n        <div class=\"span4 offset2\">\r\n        ";
  stack1 = self.invokePartial(partials.submitunit, 'submitunit', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div></div>\r\n	   ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	   <div class=\"row-fluid\">\r\n\r\n	   <div class=\"span4 offset2\">\r\n	   ";
  stack1 = self.invokePartial(partials.commentunit, 'commentunit', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	   </div>\r\n\r\n	   <div class=\"span4\">\r\n	   ";
  stack1 = self.invokePartial(partials.submitunit, 'submitunit', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	   </div>\r\n	   \r\n	   </div>\r\n	   ";
  return buffer;
  }

  buffer += " ";
  stack1 = self.invokePartial(partials.header, 'header', depth0.title, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n ";
  stack1 = helpers.each.call(depth0, depth0.allQuestions, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n	   ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.ifisOdd),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "ifisOdd", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n	   ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.ifisEven),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "ifisEven", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n";
  stack2 = self.invokePartial(partials.modal, 'modal', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });
templates['resultslist'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, stack2, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n                    <h5>\r\n                    There ";
  stack1 = helpers['if'].call(depth0, depth0.singular, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.categories),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.number)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " rating";
  stack2 = helpers.unless.call(depth0, depth0.singular, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " within ";
  if (stack2 = helpers.radius) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.radius; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " km of the starting point\r\n                    </h5>\r\n                ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "is ";
  }

function program4(depth0,data) {
  
  
  return "are ";
  }

function program6(depth0,data) {
  
  
  return "s";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <h5>\r\n                    There are "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.categories),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.number)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ratings worldwide\r\n                </h5>\r\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return ", or try again with a different search radius</h5>";
  }

function program12(depth0,data) {
  
  
  return " or choose a starting point to view local ratings</h5>\r\n                  <a href=\"selectlandingread.html\" class=\"btn btn-primary\">Starting Point</a>";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <ul class=\"nav nav-tabs nav-stacked white-text\">\r\n                ";
  stack1 = helpers.each.call(depth0, depth0.categories, {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </ul>\r\n              ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                	";
  stack1 = helpers['if'].call(depth0, depth0.number, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                  ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                	<li><a href=\"#\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.idFromName),stack1 ? stack1.call(depth0, depth0.name, options) : helperMissing.call(depth0, "idFromName", depth0.name, options)))
    + " name=\"categories_group\"><h5>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " (";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.number; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ")</h5></a></li>\r\n                	";
  return buffer;
  }

function program18(depth0,data) {
  
  
  return "\r\n              	Sorry, no results were found. Try again with a different search radius or location, or share some ratings yourself!\r\n              ";
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <div class=\"spacer10\"></div>\r\n            <div class=\"row-fluid\">\r\n              <div class=\"span8 offset2 question_background\">\r\n                ";
  stack1 = self.invokePartial(partials.radiusform, 'radiusform', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </div>\r\n            </div>\r\n            ";
  return buffer;
  }

  stack1 = self.invokePartial(partials.header, 'header', depth0.title, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n<div class=\"container-fluid\">\r\n            <div class=\"row-fluid\">\r\n                <div class=\"span8 offset2 question_background\">\r\n\r\n                ";
  stack1 = helpers.unless.call(depth0, depth0.infiniteRadius, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  stack1 = helpers['if'].call(depth0, depth0.infiniteRadius, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"spacer10\"></div>\r\n\r\n            <div class=\"row-fluid\">\r\n                <div class=\"span8 offset2 question_background\">\r\n                    <h5>\r\n                    Select the type of location to view";
  stack1 = helpers.unless.call(depth0, depth0['default'], {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                    <div class=\"controls\">\r\n                      <label class=\"radio inline\" style=\"padding-left:0px;\">View as...</label>\r\n                      <label class=\"radio inline\" for=\"map\">\r\n                        <input type=\"radio\" id=\"map\" name=\"view_group\" value=\"map\" checked=\"checked\"> Map\r\n                      </label>\r\n                      <label class=\"radio inline\" for=\"text\">\r\n                        <input type=\"radio\" id=\"text\" name=\"view_group\" value=\"text\"> Text\r\n                      </label>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"spacer10\"></div>\r\n\r\n            <div class=\"row-fluid\">\r\n              <div class=\"span8 offset2 question_background\">\r\n              ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.categories),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.number), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n              ";
  options = {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data};
  if (stack2 = helpers['else']) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0['else']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers['else']) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n              </div>\r\n            </div>\r\n\r\n            ";
  stack2 = helpers.unless.call(depth0, depth0['default'], {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n\r\n        </div>\r\n\r\n";
  stack2 = self.invokePartial(partials.modal, 'modal', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });
templates['submitunit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return " <div class=\"question_background\">\r\n <h4 style=\"color:white\">When you're ready, click this button to submit:</h4> \r\n <a class=\"btn btn-large btn-danger\" id=\"submit\">SUBMIT</a>\r\n</div>";
  });
templates['viewratings'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n	<div class=\"spacer10\"></div>\r\n	    <div class=\"row-fluid\">\r\n	      <div class=\"span8 offset2 question_background\">     \r\n		<h4>Rating #";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getNumber),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "getNumber", depth0, options)))
    + ":	";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getArrAvg),stack1 ? stack1.call(depth0, depth0.scores, options) : helperMissing.call(depth0, "getArrAvg", depth0.scores, options)))
    + "</h4><p>";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\r\n	    <table class=\"table table-bordered\" style=\"color:white;\">\r\n	    <tr>\r\n	    <td>#</td>\r\n	    <td>Question</td>\r\n	    <td>Score</td>\r\n	    </tr>\r\n\r\n		";
  stack2 = helpers.each.call(depth0, depth0.scores, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n		</table>\r\n\r\n		<h4>Comments</h4>\r\n        <p>";
  if (stack2 = helpers.comments) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.comments; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\r\n\r\n		    </div>\r\n		</div>\r\n	";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n		    <tr>\r\n		    <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getNumber),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "getNumber", depth0, options)))
    + "</td>  \r\n		    <td>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.getText),stack1 ? stack1.call(depth0, depth0, depth2.questions, options) : helperMissing.call(depth0, "getText", depth0, depth2.questions, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\r\n		    <td>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</td>\r\n		    </tr>\r\n\r\n		";
  return buffer;
  }

  stack1 = self.invokePartial(partials.header, 'header', depth0.title, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row-fluid\">\r\n        <div class=\"span8 offset2 question_background\">\r\n            <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4> <h5>(";
  if (stack1 = helpers.category) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.category; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</h5>\r\n        <h3>Average Rating: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getLocAvg),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "getLocAvg", depth0, options)))
    + "</h3>\r\n      </div>\r\n    </div>\r\n	\r\n	";
  stack2 = helpers.each.call(depth0, depth0.ratings, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</div>\r\n   \r\n";
  stack2 = self.invokePartial(partials.modal, 'modal', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });
})();
