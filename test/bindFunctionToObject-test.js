var test = require("tape"),
    bindFunctionToObject = require("../src/index");

test("bindFunctionToObject", function(t) {

    var fn0 = function() {
            return this.foo;
        },
        fn1 = function(a) {
            return this.foo + a;
        },
        fn2 = function(a, b) {
            return this.foo + a + b;
        },
        fn3 = function(a, b, c) {
            return this.foo + a + b + c;
        },
        fn4 = function(a, b, c, d) {
            return this.foo + a + b + c + d;
        },
        fn5 = function(a, b, c, d, e) {
            return this.foo + a + b + c + d + e;
        },
        fn6 = function(a, b, c, d, e, f) {
            return this.foo + a + b + c + d + e + f;
        },
        fn7 = function(a, b, c, d, e, f, g) {
            return this.foo + a + b + c + d + e + f + g;
        };


    var ctx = {
        foo: 'foo'
    };

    var b0 = bindFunctionToObject(fn0, ctx);
    t.equal(/boundFunc0/.test(b0), true, "binds zero args");
    t.equal(b0(), "foo", "binds thisObject for zero args");


    var b1 = bindFunctionToObject(fn1, ctx);
    t.equal(/boundFunc1/.test(b1), true, "binds 1 arg");
    t.equal(b1("a"), "fooa", "binds thisObject for 1 arg");

    var b2 = bindFunctionToObject(fn2, ctx);
    t.equal(/boundFunc2/.test(b2), true, "binds 2 args");
    t.equal(b2("a", "b"), "fooab", "binds thisObject for 2 args");

    var b3 = bindFunctionToObject(fn3, ctx);
    t.equal(/boundFunc3/.test(b3), true, "binds 3 args");
    t.equal(b3("a", "b", "c"), "fooabc", "binds thisObject for 3 args");

    var b4 = bindFunctionToObject(fn4, ctx);
    t.equal(/boundFunc4/.test(b4), true, "binds 4 args");
    t.equal(b4("a", "b", "c", "d"), "fooabcd", "binds thisObject for 4 args");

    var b5 = bindFunctionToObject(fn5, ctx);
    t.equal(/boundFunc5/.test(b5), true, "binds 5 args");
    t.equal(b5("a", "b", "c", "d", "e"), "fooabcde", "binds thisObject for 5 args");

    var b6 = bindFunctionToObject(fn6, ctx);
    t.equal(/boundFunc6/.test(b6), true, "binds 6 args");
    t.equal(b6("a", "b", "c", "d", "e", "f"), "fooabcdef", "binds thisObject for 6 args");

    var b7 = bindFunctionToObject(fn7, ctx);
    t.equal(/boundFuncVariableArgs/.test(b7), true, "binds 6 plus args");
    t.equal(b7("a", "b", "c", "d", "e", "f", "g"), "fooabcdefg", "binds thisObject for 6 plus args");

    t.end();

});
