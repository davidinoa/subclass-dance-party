var makeTomDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, 1000, timeBetweenSteps);
  this.$node.addClass('theTom');
  this.$node.append('<img src=https://i.imgur.com/NtKvrCo.png/>');
};

makeTomDancer.prototype = Object.create(makeDancer.prototype);
makeTomDancer.prototype.constructor = makeTomDancer;

makeTomDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('tomDancer');
};

makeTomDancer.prototype.lineUp = function() {
  var styleSettings = {
    top: 250
  };
  this.$node.css(styleSettings);
};
