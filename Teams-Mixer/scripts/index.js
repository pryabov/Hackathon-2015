var teams = [
	{
		name: 'fdbdsfbd',
		color: 'red'
	},
	{
		name: 'fdbdsfbd',
		color: 'green'
	},
	{
		name: 'CMD',
		color: 'yellow'
	},
	{
		name: 'Techies',
		color: 'blue'
	},
	{
		name: 'fdbdsfbd',
		color: 'pink'
	},
	{
		name: '//TODO',
		color: 'grey'
	},
	{
		name: 'Alpha Team',
		color: 'pink'
	},
	{
		name: 'fdbdsfbd',
		color: 'grey'
	},
	{
		name: 'Avengers',
		color: 'pink'
	},
	{
		name: 'fdbdsfbd',
		color: 'grey'
	},
	{
		name: '42',
		color: 'pink'
	},
	{
		name: 'D2-D9',
		color: 'grey'
	}
];

var TeamViewModel = function(dataModel){
	this.name = dataModel.name;
	this.color = ['rgb(', Math.floor(Math.random()*150)+100, ',',Math.floor(Math.random()*150)+100,',',Math.floor(Math.random()*200)+50,')'].join('');
};


var PageViewModel = function(){
	this.isMixing = ko.observable(false);

	this.teamsInitialList = ko.observableArray(teams.map(function(team){
		return new TeamViewModel(team);
	}));

	this.teamsResultList = ko.observableArray();
};

var MIX_COUNTER_MAX_COUNT = 30;
PageViewModel.prototype.mixCounter = MIX_COUNTER_MAX_COUNT;

PageViewModel.prototype.mix = function(callback){
	this.teamsInitialList.sort(function(a,b){return Math.random() > 0.5});
	this.mixCounter--;

	if(	this.mixCounter > 0){
		setTimeout(this.mix.bind(this, callback), 50);
	} else{
		callback();
	}
};

PageViewModel.prototype.startFlickering = function(){
	var self = this;

	this.mix(function(){
		var unhappyTeam = self.teamsInitialList.pop();
		self.teamsResultList.unshift(unhappyTeam);

		if(self.teamsInitialList().length > 0){
			self.mixCounter = MIX_COUNTER_MAX_COUNT;
			setTimeout(self.startFlickering.bind(self), 500);
		}
	});
};

PageViewModel.prototype.mixTeams = function(){
	this.isMixing(true);
	this.startFlickering();
};

ko.applyBindings(new PageViewModel())
