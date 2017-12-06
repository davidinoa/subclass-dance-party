var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 500);
  this.$node.addClass('theBlinky');
  this.$node.append('<img src=https://i.imgur.com/DszN73r.png/>');
  var styleSettings = {
    top: 25
  };
  this.$node.css(styleSettings);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

};
