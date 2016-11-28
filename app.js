angular
  .module('moviesApp', [])
  .controller('MoviesController', MoviesCtrl);

  function MoviesCtrl () {

    var vm = this;

    vm.movieList = [
      {
        id: 1,
        name: 'Hacksaw Ridge',
        genre: 'Action and Adventure'
      },
      {
        id: 10,
        name: 'Dr. Strange',
        genre: 'Science Fiction & Fantasy'
      },
      {
        id: 39,
        name: 'Arrival',
        genre: 'Mystery & Suspense'
      },
      {
        id: 94,
        name: 'Moana',
        genre: 'Kids & Family'
      },
      {
        id: 143,
        name: 'Kubo and the Two Strings',
        genre: 'Animation'
      }
    ];
    console.log(vm);
  };
