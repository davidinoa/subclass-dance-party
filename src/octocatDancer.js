var makeOctocatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src=https://i.imgur.com/4qiqfWF.png/>');
};

makeOctocatDancer.prototype = Object.create(makeDancer.prototype);
makeOctocatDancer.prototype.constructor = makeOctocatDancer;

makeOctocatDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('octocatDancer');
};

makeOctocatDancer.prototype.lineUp = function() {
  var styleSettings = {
    top: 550
  };

  this.$node.css(styleSettings);
};
