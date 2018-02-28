
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {

      // Inserts seed entries
      return knex('movies').insert([
        {title:'Batman Begins', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', genre:'Action', votes:0},
        {title:'Gone Girl', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', genre:'Drama', votes:0},
        {title:'Star Wars', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', genre:'Action/Adventure', votes:0},
        {title:'Harry Potter', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', genre:'Adventure', votes:0},
        {title:'Wall-E', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', genre:'Animation', votes:0},
        {title:'Training Day', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', genre:'Crime', votes:0}
      ]);
    });
};
