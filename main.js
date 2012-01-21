$(function() {
    var canvas = $("#c");
    var canvasHeight;
    var canvasWidth;
    var ctx;
    var dt = 0.1;

    var pointCollection;

    function init() {
        updateCanvasDimensions();

        var g =
 [
     //E Shadow
     new Point(1, 5, 0.0, 9, "#663300"),
    new Point(1, 23, 0.0, 9, "#663300"),
    new Point(1, 41, 0.0, 9, "#663300"),
    new Point(1, 59, 0.0, 9, "#663300"),
    new Point(1, 77, 0.0, 9, "#663300"),
    new Point(1, 95, 0.0, 9, "#663300"),
    new Point(1, 112, 0.0, 9, "#663300"),
    //
    new Point(19, 4, 0.0, 9, "#663300"),
    new Point(37, 4, 0.0, 9, "#663300"),
    new Point(55, 4, 0.0, 9, "#663300"),
    new Point(73, 4, 0.0, 9, "#663300"),
    //
    new Point(19, 58, 0.0, 9, "#663300"),
    new Point(37, 58, 0.0, 9, "#663300"),
    //
    new Point(19, 112, 0.0, 9, "#663300"),
    new Point(37, 112, 0.0, 9, "#663300"),
    new Point(55, 112, 0.0, 9, "#663300"),
    new Point(73, 112, 0.0, 9, "#663300"),
    //EEEEEEEEEEE    
    new Point(1, 1, 0.0, 9, "#0000FF"),
    new Point(1, 19, 0.0, 9, "#00FF00"),
    new Point(1, 37, 0.0, 9, "#0000FF"),
    new Point(1, 55, 0.0, 9, "#00FF00"),
    new Point(1, 73, 0.0, 9, "#0000FF"),
    new Point(1, 91, 0.0, 9, "#00FF00"),
    new Point(1, 109, 0.0, 9, "#0000FF"),
    //
    new Point(19, 1, 0.0, 9, "#00FF00"),
    new Point(37, 1, 0.0, 9, "#0000FF"),
    new Point(55, 1, 0.0, 9, "#00FF00"),
    new Point(73, 1, 0.0, 9, "#0000FF"),
    //
    new Point(19, 55, 0.0, 9, "#0000FF"),
    new Point(37, 55, 0.0, 9, "#00FF00"),
    //
    new Point(19, 109, 0.0, 9, "#00FF00"),
    new Point(37, 109, 0.0, 9, "#0000FF"),
    new Point(55, 109, 0.0, 9, "#00FF00"),
    new Point(73, 109, 0.0, 9, "#0000FF"),
    //////////////////////////////////////
    
    //A Shadow
    new Point(168, 44, 0.0, 10, "#00FF00"),    
    new Point(163, 52, 0.0, 9, "#663300"),
    new Point(153, 67, 0.0, 9, "#663300"),
    new Point(143, 82, 0.0, 9, "#663300"),
    new Point(133, 97, 0.0, 9, "#663300"),
    new Point(123, 112, 0.0, 9, "#663300"),
    //
    new Point(173, 52, 0.0, 9, "#663300"),
    new Point(183, 67, 0.0, 9, "#663300"),
    new Point(193, 82, 0.0, 9, "#663300"),
    new Point(203, 97, 0.0, 9, "#663300"),
    new Point(213, 112, 0.0, 9, "#663300"),
    //
    new Point(156, 90, 0.0, 6.5, "#663300"),
    new Point(168, 90, 0.0, 6.5, "#663300"),
    new Point(181, 90, 0.0, 6.5, "#663300"),
    //AAAAAAAAAAAAA
    new Point(163, 49, 0.0, 9, "#0000FF"),
    new Point(153, 64, 0.0, 9, "#00FF00"),
    new Point(143, 79, 0.0, 9, "#0000FF"),
    new Point(133, 94, 0.0, 9, "#00FF00"),
    new Point(123, 109, 0.0, 9, "#0000FF"),
    //
    new Point(173, 49, 0.0, 9, "#0000FF"),
    new Point(183, 64, 0.0, 9, "#00FF00"),
    new Point(193, 79, 0.0, 9, "#0000FF"),
    new Point(203, 94, 0.0, 9, "#00FF00"),
    new Point(213, 109, 0.0, 9, "#0000FF"),
    //
    new Point(156, 88, 0.0, 6.5, "#00FF00"),
    new Point(168, 88, 0.0, 6.5, "#0000FF"),
    new Point(181, 88, 0.0, 6.5, "#00FF00"),
    
    
    ////////////////////////////////////////
    
    //R Shadow
    new Point(263, 40, 0.0, 9, "#663300"),
    new Point(263, 58, 0.0, 9, "#663300"),
    new Point(263, 76, 0.0, 9, "#663300"),
    new Point(263, 94, 0.0, 9, "#663300"),
    new Point(263, 112, 0.0, 9, "#663300"),
    //
    new Point(281, 40, 0.0, 9, "#663300"),
    new Point(299, 40, 0.0, 9, "#663300"),
    new Point(317, 40, 0.0, 9, "#663300"),
    new Point(320, 55, 0.0, 7, "#663300"),
    new Point(315, 67, 0.0, 7, "#663300"),
    new Point(308, 78, 0.0, 7, "#663300"),
    new Point(295, 78, 0.0, 6, "#663300"),
    new Point(286, 78, 0.0, 6, "#663300"),
    new Point(276, 78, 0.0, 6, "#663300"),
    //
    new Point(286, 92, 0.0, 8.5, "#663300"),
    new Point(299, 102, 0.0, 8.5, "#663300"),
    new Point(311, 112, 0.0, 8.5, "#663300"),
        
    //RRRRRRRRRR
    new Point(263, 37, 0.0, 9, "#0000FF"),
    new Point(263, 55, 0.0, 9, "#00FF00"),
    new Point(263, 73, 0.0, 9, "#0000FF"),
    new Point(263, 91, 0.0, 9, "#00FF00"),
    new Point(263, 109, 0.0, 9, "#0000FF"),
    //
    new Point(281, 37, 0.0, 9, "#00FF00"),
    new Point(299, 37, 0.0, 9, "#0000FF"),
    new Point(317, 37, 0.0, 9, "#00FF00"),
    new Point(320, 52, 0.0, 7, "#0000FF"),
    new Point(315, 64, 0.0, 7, "#00FF00"),
    new Point(308, 75, 0.0, 7, "#0000FF"),
    new Point(295, 75, 0.0, 6, "#00FF00"),
    new Point(286, 75, 0.0, 6, "#0000FF"),
    new Point(276, 75, 0.0, 6, "#00FF00"),
    //
    new Point(286, 89, 0.0, 8.5, "#00FF00"),
    new Point(299, 99, 0.0, 8.5, "#0000FF"),
    new Point(311, 109, 0.0, 8.5, "#00FF00"),
    /////////////////////////////////////////
    
    //T Shadow
    new Point(363, 40, 0.0, 9, "#663300"),
    new Point(381, 40, 0.0, 9, "#663300"),
    new Point(399, 40, 0.0, 9, "#663300"),
    new Point(417, 40, 0.0, 9, "#663300"),
    new Point(435, 40, 0.0, 9, "#663300"),
    //
    new Point(399, 58, 0.0, 9, "#663300"),
    new Point(399, 76, 0.0, 9, "#663300"),
    new Point(399, 94, 0.0, 9, "#663300"),
    new Point(399, 112, 0.0, 9, "#663300"),
    
    //TTTTTTTTTTTTTTT
    new Point(363, 37, 0.0, 9, "#0000FF"),
    new Point(381, 37, 0.0, 9, "#00FF00"),
    new Point(399, 37, 0.0, 9, "#0000FF"),
    new Point(417, 37, 0.0, 9, "#00FF00"),
    new Point(435, 37, 0.0, 9, "#0000FF"),
    //
    new Point(399, 55, 0.0, 9, "#00FF00"),
    new Point(399, 73, 0.0, 9, "#0000FF"),
    new Point(399, 91, 0.0, 9, "#00FF00"),
    new Point(399, 109, 0.0, 9, "#0000FF"),
    ///////////////////////////////////////
    
    //H Shadow
    new Point(485, 40, 0.0, 9, "#663300"),
    new Point(485, 58, 0.0, 9, "#663300"),
    new Point(485, 76, 0.0, 9, "#663300"),
    new Point(485, 94, 0.0, 9, "#663300"),
    new Point(485, 112, 0.0, 9, "#663300"),
    //
    new Point(503, 76, 0.0, 9, "#663300"),
    new Point(521, 76, 0.0, 9, "#663300"),
    new Point(539, 76, 0.0, 9, "#663300"),
    new Point(557, 76, 0.0, 9, "#663300"),
    //
    new Point(557, 40, 0.0, 9, "#663300"),
    new Point(557, 58, 0.0, 9, "#663300"),
    new Point(557, 94, 0.0, 9, "#663300"),
    new Point(557, 112, 0.0, 9, "#663300"),
    //HHHHHHHHHH
    new Point(485, 37, 0.0, 9, "#0000FF"),
    new Point(485, 55, 0.0, 9, "#00FF00"),
    new Point(485, 73, 0.0, 9, "#0000FF"),
    new Point(485, 91, 0.0, 9, "#00FF00"),
    new Point(485, 109, 0.0, 9, "#0000FF"),
    //
    new Point(503, 73, 0.0, 9, "#00FF00"),
    new Point(521, 73, 0.0, 9, "#0000FF"),
    new Point(539, 73, 0.0, 9, "#00FF00"),
    new Point(557, 73, 0.0, 9, "#0000FF"),
    //
    new Point(557, 37, 0.0, 9, "#0000FF"),
    new Point(557, 55, 0.0, 9, "#00FF00"),
    new Point(557, 91, 0.0, 9, "#00FF00"),
    new Point(557, 109, 0.0, 9, "#0000FF"),
];     

        gLength = g.length;
        for (var i = 0; i < gLength; i++) {
            g[i].curPos.x = (canvasWidth/2 - 180) + g[i].curPos.x;
            g[i].curPos.y = (canvasHeight/2 - 65) + g[i].curPos.y;

            g[i].originalPos.x = (canvasWidth/2 - 180) + g[i].originalPos.x;
            g[i].originalPos.y = (canvasHeight/2 - 65) + g[i].originalPos.y;
        };

        pointCollection = new PointCollection();
        pointCollection.points = g;

        initEventListeners();
        timeout();
    };

    function initEventListeners() {
        $(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);

        canvas.get(0).ontouchmove = function(e) {
            e.preventDefault();
            onTouchMove(e);
        };

        canvas.get(0).ontouchstart = function(e) {
            e.preventDefault();
        };
    };

    function updateCanvasDimensions() {
        canvas.attr({height: $(window).height(), width: $(window).width()});
        canvasWidth = canvas.width();
        canvasHeight = canvas.height();

        draw();
    };

    function onMove(e) {
        if (pointCollection)
            pointCollection.mousePos.set(e.pageX, e.pageY);
    };

    function onTouchMove(e) {
        if (pointCollection)
            pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    };

    function timeout() {
        draw();
        update();

        setTimeout(function() { timeout() }, 30);
    };

    function draw() {
        var tmpCanvas = canvas.get(0);

        if (tmpCanvas.getContext == null) {
            return;
        };

        ctx = tmpCanvas.getContext('2d');
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        if (pointCollection)
            pointCollection.draw();
    };

    function update() {        
        if (pointCollection)
            pointCollection.update();
    };

    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
 
        this.addX = function(x) {
            this.x += x;
        };

        this.addY = function(y) {
            this.y += y;
        };

        this.addZ = function(z) {
            this.z += z;
        };
 
        this.set = function(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        };
    };

    function PointCollection() {
        this.mousePos = new Vector(0, 0);
        this.points = new Array();

        this.newPoint = function(x, y, z) {
            var point = new Point(x, y, z);
            this.points.push(point);
            return point;
        };

        this.update = function() {        
            var pointsLength = this.points.length;

            for (var i = 0; i < pointsLength; i++) {
                var point = this.points[i];

                if (point == null)
                    continue;

                var dx = this.mousePos.x - point.curPos.x;
                var dy = this.mousePos.y - point.curPos.y;
                var dd = (dx * dx) + (dy * dy);
                var d = Math.sqrt(dd);

                if (d < 150) {
                    point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
                    point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
                } else {
                    point.targetPos.x = point.originalPos.x;
                    point.targetPos.y = point.originalPos.y;
                };

                point.update();
            };
        };

        this.draw = function() {
            var pointsLength = this.points.length;
            for (var i = 0; i < pointsLength; i++) {
                var point = this.points[i];

                if (point == null)
                    continue;

                point.draw();
            };
        };
    };

    function Point(x, y, z, size, colour) {
        this.colour = colour;
        this.curPos = new Vector(x, y, z);
        this.friction = 0.8;
        this.originalPos = new Vector(x, y, z);
        this.radius = size;
        this.size = size;
        this.springStrength = 0.1;
        this.targetPos = new Vector(x, y, z);
        this.velocity = new Vector(0.0, 0.0, 0.0);

        this.update = function() {
            var dx = this.targetPos.x - this.curPos.x;
            var ax = dx * this.springStrength;
            this.velocity.x += ax;
            this.velocity.x *= this.friction;
            this.curPos.x += this.velocity.x;

            var dy = this.targetPos.y - this.curPos.y;
            var ay = dy * this.springStrength;
            this.velocity.y += ay;
            this.velocity.y *= this.friction;
            this.curPos.y += this.velocity.y;

            var dox = this.originalPos.x - this.curPos.x;
            var doy = this.originalPos.y - this.curPos.y;
            var dd = (dox * dox) + (doy * doy);
            var d = Math.sqrt(dd);

            this.targetPos.z = d/100 + 1;
            var dz = this.targetPos.z - this.curPos.z;
            var az = dz * this.springStrength;
            this.velocity.z += az;
            this.velocity.z *= this.friction;
            this.curPos.z += this.velocity.z;

            this.radius = this.size*this.curPos.z;
            if (this.radius < 1) this.radius = 1;
        };

        this.draw = function() {
            ctx.fillStyle = this.colour;
            ctx.beginPath();
            ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
            ctx.fill();
        };
    };

    init();
});
