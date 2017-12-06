var makeOBJDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append("<img src=https://i.imgur.com/08dL0fK.png/>");
};

makeOBJDancer.prototype = Object.create(makeDancer.prototype);
makeOBJDancer.prototype.constructor = makeOBJDancer;

makeOBJDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('objDancer');
};

makeOBJDancer.prototype.lineUp = function() {
  var styleSettings = {
    top: 250
  };
  this.$node.css(styleSettings);
};
