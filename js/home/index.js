/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  this.Class = function(){};
  
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
    
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
    
    return Class;
  };
})();



var Base = Class.extend({});

var Canvas2D = Base.extend({
	init : function(id,options) {
		this.el = $('#'+id);
		this.context = this.el[0].getContext('2d');
		if(options.width) {
      this.width = options.width
			this.el.attr({width: options.width})
		}

		if(options.height) {
      this.height = options.height
			this.el.attr({height: options.height})
		}
	},

	getContext : function(){
		return this.context;
	},

	clearContext : function() {
    console.log(this.width)
		this.context.clearRect(0,0,this.width,this.height);
	}
})

var Engine = Base.extend({
  _objects : [],
  _context : undefined,
  _canvas  : undefined,

  init : function(canvas) {
    this._canvas = canvas;
    this._context = canvas.getContext();
  },

  animate : function() {
    this.update();
    this.draw();
  },

  update : function() {

  },

  draw : function() {
    this._canvas.clearContext();
    $.each(this._objects, function(index,particle){
      particle.draw();
    })
  },

  pushParticle : function(part) {
    this._objects.push(part);
  }
})

var Sphere = Base.extend({
	init : function(x,y,r) {
		this.x = x;
		this.y = y;
		this.r = r;
	},

	behavior : function() {

	},

	draw : function(context) {
		context.save();
			context.fillStyle = "rgba(255,255,255,0.3)";
			context.beginPath();
	      context.arc(this.x, this.y, this.r+this.r, 0, Math.PI*2, true); //*2
	    context.fill();
		context.restore();

		context.save();
			context.fillStyle = "rgba(255,255,255,0.8)";
			context.beginPath();
	      context.arc(this.x, this.y, this.r, 0, Math.PI*2, true); //*2
	    context.fill();
		context.restore();
	}

})


$(function(){
  var running = false;
  bg = new Canvas2D('background',{width: window.innerWidth, height: window.innerHeight-75});
  eng = new Engine(bg);
	for(var i = 0; i < 20; i++){
    eng.pushParticle(new Sphere(Math.random()*window.innerWidth,Math.random()*(innerHeight-75),Math.random()*10 + 5));
	}

  eng.animate();
  // $.each(dots, function(i,v){
  //   v.draw(bg.getContext());
  // })

  // $('body').mousemove(function(event){
  //   if(!running) {
  //     setTimeout(function(){
  //       bg.clearContext();
  //       x = event.pageX
  //       y = event.pageY
  //       console.log('running'+x+'-'+y)

  //       $.each(dots, function(i,v){
  //         v.x = v.x - ((v.x - x) / 50);
  //         v.y = v.y - ((v.y - y) / 50);
  //         v.draw(bg.getContext());
  //       })
  //       running = false
  //     }, 1)
  //     running = true;  
  //   }
  // })
});