(function (global,factory) {
    factory(global);
})(typeof window !== "undefined" ? window : this,function (global, undefined) {
    var Tex = {};
    var fn = {};
    var event = {};
    var time = {};
    var tween = {};

    var displayExtend = {};
    var shapeExtend = {};
    var animationExtend = {};

    var protos = {
        Container: {},
        SpriteProto: {},
        BitmapProto: {},
        ParticleProto: {},
        SpiritProto: {},
        ShapeProto: {}
    };

    var extend = function (source, destination) {
        var property;
        destination = arguments[1] || Tex;
        for (property in source) destination[property] = source[property];
        return destination;
    };
    var protoExtend = function (source, destination) {
        destination = arguments[1] || Tex;
        destination = Object.create(source);
    };

    //显示容器构造函数
    protoExtend({
        Container () {

        },
        Sprite () {
        },
        Bitmap () {

        },
        Particle () {

        },
        Spirit () {

        },
        Shape () {

        }
    });

    //显示容器控制
    extend({
        remove (display) {

        },
        removeByIndex (index) {

        },
        addChild (display) {

        },
        addChildByIndex (index) {

        },
        moveTo (display) {

        }
    },displayExtend);

    //shape方法
    extend({
        beginFill () {

        },
        drawRect () {

        },
        drawCircle () {

        },
        lineStyle () {

        },
        moveTo () {

        },
        lineTo () {

        },
        endFill () {

        }
    },shapeExtend);

    //animation方法
    extend({
        createAnimate () {

        }
    },animationExtend);

    //私有属性方法
    extend({
        index: [],
        canvasDisplays: [],
        drawImg (config) {

        },
        clear (canvas) {

        },
        repaint (canvas) {

        }
    },fn);

    //时间控制
    extend({
        createTimer () {

        },
    },time);

    //tween方法
    extend({

    },tween);

    //event方法
    extend({
        addEvent () {

        },
        removeEvent () {

        },
    },event);

    var init = function () {

    };
});
