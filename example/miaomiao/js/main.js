(function(){
	var ns = FL.ns("miaomiao");
	eval(FL.import("FL", "Stage, LoadProgress, ImageLoader, MovieClip, Bitmap"));

	var	canvas = document.querySelector("canvas");
	var width = 560;
	var height = 360;
	var fps = 60;
	
	var stage = new Stage(canvas, width, height, fps);
	stage.start();
	
	var loadProgress = new LoadProgress(new ImageLoader());
	loadProgress.x = width>>1;loadProgress.y=height>>1;
	loadProgress.addEventListener("complete", function(){
		stage.removeChild(this);
		this.removeAllEventListener("complete", arguments.callee);
		loadProgress = null;
		R.images = this.loader.images; 
		init();
	});
	loadProgress.load(R.images);
	stage.addChild(loadProgress);

	stage.update = function(){
		console.log();
	};

	function init(){
		var offset = 150;
		var y = height - 20;
		bg = new Bitmap(width * .5 - 13, 10, R.images.bg);
		bg.originX = bg.width * .5;
		stage.addChild(bg);

		cat0 = new MovieClip(offset, y);
		cat0.setImg(R.images.cat, 82, 85);
		cat0.addAnimation("move", "0-1", true, 12);
		stage.addChild(cat0);
		cat0.scaleX = -1;
		cat0.setCenter();
		cat0.originY = 85;
		cat0.play("move");

		cat1 = new MovieClip(width - offset, y);
		cat1.setImg(R.images.cat, 82, 85);
		cat1.addAnimation("move", "0-1", true, 12);
		stage.addChild(cat1);
		cat1.setCenter();
		cat1.originY = 85;
		cat1.play("move");

		ball = new Bitmap(width * .5, y - 100, R.images.ball);
		ball.setCenter();
		stage.addChild(ball);
	}

	log(this)
})();