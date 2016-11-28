angular
    .module('moviesApp', [])
    .controller('MoviesController', MoviesCtrl);

function MoviesCtrl() {

    var vm = this;

        vm.moviesToWatch = [{
            id: 1,
            name: 'Hacksaw Ridge',
            genre: 'Action and Adventure'
        }, {
            id: 10,
            name: 'Dr. Strange',
            genre: 'Science Fiction & Fantasy'
        }, {
            id: 39,
            name: 'Arrival',
            genre: 'Mystery & Suspense'
        }, {
            id: 94,
            name: 'Moana',
            genre: 'Kids & Family'
        }, {
            id: 143,
            name: 'Kubo and the Two Strings',
            genre: 'Animation'
        }];

				vm.addMovie = function() {
						var newObj = {name: vm.title}
						vm.moviesToWatch.push(newObj);
						  vm.text = '';
					};

        console.log(vm);
    };
