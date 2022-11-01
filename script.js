document.addEventListener('DOMContentLoaded', function(){
	var photosOnHouse = [
		{ position: {y: 10, x: 0}, identificator: '1', room: 'technical'},
		{ position: {y: 0, x: 30}, identificator: '2', room: 'technical'},
		{ position: {y: 20, x: 65}, identificator: '3', room: 'technical'},
		{ position: {y: 40, x: -0.01}, identificator: '4', room: 'technical'},
		{ position: {y: -0.01, x: -0.01}, identificator: '5', room: 'technical'},
		{ position: {y: -0.01, x: 40}, identificator: '6', room: 'technical'},
		{ position: {y: 80, x: 0}, identificator: '7', room: 'technical'},
		{ position: {y: 65, x: 0}, identificator: '8', room: 'technical'},
		{ position: {y: 50, x: -0.01}, identificator: '1', room: 'office'},
		{ position: {y: -0.01, x: 80}, identificator: '2', room: 'office'},
		{ position: {y: -0.01, x: 50}, identificator: '3', room: 'office'},
		{ position: {y: -0.01, x: 14}, identificator: '4', room: 'office'},
		{ position: {y: 50, x: 0}, identificator: '5', room: 'office'},
		{ position: {y: 0, x: 70}, identificator: '6', room: 'office'},
		{ position: {y: 0, x: 20}, identificator: '7', room: 'office'},
		{ position: {y: 50, x: -0.01}, identificator: '1', room: 'living'},
		{ position: {y: 25, x: -0.01}, identificator: '2', room: 'living'},
		{ position: {y: 3, x: -0.01}, identificator: '3', room: 'living'},
		{ position: {y: 0, x: 55}, identificator: '4', room: 'living'},
		{ position: {y: 4, x: 33}, identificator: '5', room: 'living'},
		{ position: {y: 40, x: 0}, identificator: '6', room: 'living'},
		{ position: {y: 65, x: 0}, identificator: '7', room: 'living'},
		{ position: {y: -0.01, x: 3}, identificator: '8', room: 'living'},
		{ position: {y: -0.01, x: 70}, identificator: '9', room: 'living'},
		{ position: {y: 73, x: 61}, identificator: '10', room: 'living'},
		{ position: {y: 90, x: -0.01}, identificator: '11', room: 'living'},
		{ position: {y: 0, x: 0}, identificator: '1', room: 'pantry'},
		{ position: {y: -0.01, x: 20}, identificator: '2', room: 'pantry'},
		{ position: {y: 60, x: -0.01}, identificator: '3', room: 'pantry'},
		{ position: {y: -0.01, x: -0.01}, identificator: '1', room: 'wash'},
		{ position: {y: 20, x: 0}, identificator: '2', room: 'wash'},
		{ position: {y: -0.01, x: 40}, identificator: '3', room: 'wash'},
		{ position: {y: -0.01, x: -0.01}, identificator: '1', room: 'master'},
		{ position: {y: 13, x: -0.01}, identificator: '2', room: 'master'},
		{ position: {y: 0, x: 32}, identificator: '3', room: 'master'},
		{ position: {y: 0, x: 0}, identificator: '4', room: 'master'},
		{ position: {y: -0.01, x: 0}, identificator: '5', room: 'master'},
		{ position: {y: 40, x: 0}, identificator: '1', room: 'shower'},
		{ position: {y: -0.01, x: -0.01}, identificator: '2', room: 'shower'},
		{ position: {y: 0, x: -0.01}, identificator: '3', room: 'shower'},
		{ position: {y: 0, x: 20}, identificator: '4', room: 'shower'},
		{ position: {y: -0.01, x: 60}, identificator: '1', room: 'wardrobe'},
		{ position: {y: 0, x: 0}, identificator: '2', room: 'wardrobe'},
		{ position: {y: 0, x: -0.01}, identificator: '3', room: 'wardrobe'},
		{ position: {y: -0.01, x: 10}, identificator: '1', room: 'badroom'},
		{ position: {y: -0.01, x: 75}, identificator: '2', room: 'badroom'},
		{ position: {y: 50, x: -0.01}, identificator: '3', room: 'badroom'},
		{ position: {y: 0, x: 45}, identificator: '4', room: 'badroom'},
		{ position: {y: 50, x: 0}, identificator: '5', room: 'badroom'},
		{ position: {y: 45, x: -0.01}, identificator: '1', room: 'room'},
		{ position: {y: 0, x: 0}, identificator: '2', room: 'room'},
		{ position: {y: 80, x: 0}, identificator: '3', room: 'room'},
		{ position: {y: 15, x: -0.01}, identificator: '4', room: 'room'},
		{ position: {y: -0.01, x: 80}, identificator: '5', room: 'room'},
		{ position: {y: -0.01, x: 80}, identificator: '1', room: 'bethroom'},
		{ position: {y: -0.01, x: 17}, identificator: '2', room: 'bethroom'},
		{ position: {y: 50, x: -0.01}, identificator: '3', room: 'bethroom'},
		{ position: {y: 0, x: 45}, identificator: '4', room: 'bethroom'},
		{ position: {y: 49, x: 47}, identificator: '1', room: 'mudroom'},
		{ position: {y: -0.01, x: 0}, identificator: '2', room: 'mudroom'},
		{ position: {y: -0.01, x: 80}, identificator: '3', room: 'mudroom'},
		{ position: {y: 20, x: -0.01}, identificator: '4', room: 'mudroom'},
		{ position: {y: 63, x: 15}, identificator: '1', room: 'coridor'},
		{ position: {y: 74, x: 50}, identificator: '2', room: 'coridor'},
		{ position: {y: 56, x: 60}, identificator: '3', room: 'coridor'},
		{ position: {y: 37, x: 68}, identificator: '4', room: 'coridor'},
		{ position: {y: 0, x: 80}, identificator: '5', room: 'coridor'},
		{ position: {y: 50, x: -0.01}, identificator: '6', room: 'coridor'},
		{ position: {y: 66, x: -0.01}, identificator: '7', room: 'coridor'},
		{ position: {y: 85, x: -0.01}, identificator: '8', room: 'coridor'},
		{ position: {y: 85, x: 67}, identificator: '9', room: 'coridor'},
	];

	var rooms = photosOnHouse
		.filter((item, index, self) => self.findIndex(itemm => item.room == itemm.room) === index)
		.map(item => item.room);
	var image = document.getElementById('homeImage');
	var loader = document.getElementById('imgLoader');

	photosOnHouse.forEach(function(photo) {
		var room = document.getElementsByClassName(photo.room)[0];

		var point = document.createElement('span');
		point.setAttribute('class', 'point');

		if (photo.position.y >= 0) {
			point.style.top = photo.position.y + '%';
		} else {
			point.style.bottom = photo.position.y + '%';
		}
		if (photo.position.x >= 0) {
			point.style.left = photo.position.x + '%';
		} else {
			point.style.right = photo.position.x + '%';
		}

		point.dataset.nameImg = 'electricion/' + photo.room + '_' + photo.identificator + '.jpg';
		point.onclick = function () {
			image.setAttribute('src', this.dataset.nameImg);
			image.setAttribute('style', 'display: none');
			loader.setAttribute('style', 'display: block');
		};
		room.append(point);
	});

	rooms.forEach(name => {
		var room = document.getElementsByClassName(name)[0];
		room.addEventListener('click', function() {
			rooms.forEach(name => document.getElementsByClassName(name)[0].classList.remove('showPoint'));
			this.classList.add('showPoint');
		});
	});

	image.onload = function() {
		loader.setAttribute('style', 'display: none');
		image.setAttribute('style', 'display: block');
	};
});