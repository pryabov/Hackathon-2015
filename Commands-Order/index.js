$(function(){
	window.viewModel = {};

	viewModel.commands = [];

	viewModel.commands.push({name: 'Тактический единорог'});
	viewModel.commands.push({name: 'Рубишки'});
	viewModel.commands.push({name: 'CMD'});
	viewModel.commands.push({name: 'Techies'});
	viewModel.commands.push({name: 'Анкерный Болт Сатаны'});
	viewModel.commands.push({name: '//TODO'});
	viewModel.commands.push({name: 'Alpha Team'});
	viewModel.commands.push({name: 'Плюшевая и Терминаторы'});
	viewModel.commands.push({name: 'Avengers'});
	viewModel.commands.push({name: 'ПиЧенКи'});
	viewModel.commands.push({name: '42'});
	viewModel.commands.push({name: 'D2-D9'});

	var index = 1;
	viewModel.commands.forEach(function(item){
		item.id = index;
		index++;

		$('#before-sort-container').append('<div id="command_'+ item.id +'" style="height:20px; width: 300px; position: absolute;top:'+(item.id - 1)*20+'px">'+item.name+'</div>')
	});

	window.mix = function(){
		for(var i = 0; i < viewModel.commands.length; i++){
			var flag = false;
			while(!flag) {
				viewModel.commands[i].weight = Math.random();

				flag = true;
				for(var j = 0; j < i; j++){
					if(viewModel.commands[j].weight === viewModel.commands[i].weight){
						flag = false;
					}
				}
			}
		};

		console.log(viewModel.commands);

		viewModel.resultingArray = viewModel.commands.slice(0);
		viewModel.resultingArray.sort(function(a, b){
			return a.weight - b.weight;
		});

		console.log(viewModel.resultingArray);

		function move(index){
			$el = $('#command_' + viewModel.resultingArray[index].id);
			$el.html((index + 1) + '. ' + $el.html());
			$el.animate({left: 350, top: index * 20}, 1000, function(){
				if(index < viewModel.resultingArray.length - 1){
					move(index + 1);
				}
			});
		}

		move(0);
		$('#mix-btn').hide();
	};
});

