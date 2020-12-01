const movie = (name) => {
  this.name = name;
  this.dead = false;
};

movie.prototype.die = function () {
  this.dead = true;
};
module.export = movie;
