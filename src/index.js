var isNumber = require("core.is_number");

module.exports = bindFunctionToObject;

/**

 bindFunctionToObject binds a function to a given context object.
 
 If a size N is given, the fn will be executed with call()
 instead of apply() for N arguments when N is in range 0 to 6.
 
 If size N is not given, the length property (L) of the fn Function is used
 to dispatch to call() for 0 <= L <= 6. 

 This is an internal function and should never be used by external libraries.

 apply() is used for L > 6.

 @param fn      Function
 @param thisObject   Object
 @param size          Number

 @return Function     a bound function
*/
function bindFunctionToObject(fn, thisObject, size) {

    var bindArgCount = (isNumber(size) ? size : fn.length) || 0;

    switch (bindArgCount) {

        case 0:
            return function boundFunc0() {
                return fn.call(thisObject);
            };
        case 1:
            return function boundFunc1(arg1) {
                return fn.call(thisObject, arg1);
            };
        case 2:
            return function boundFunc2(arg1, arg2) {
                return fn.call(thisObject, arg1, arg2);
            };
        case 3:
            return function boundFunc3(arg1, arg2, arg3) {
                return fn.call(thisObject, arg1, arg2, arg3);
            };
        case 4:
            return function boundFunc4(arg1, arg2, arg3, arg4) {
                return fn.call(thisObject, arg1, arg2, arg3, arg4);
            };
        case 5:
            return function boundFunc5(arg1, arg2, arg3, arg4, arg5) {
                return fn.call(thisObject, arg1, arg2, arg3, arg4, arg5);
            };
        case 6:
            return function boundFunc6(arg1, arg2, arg3, arg4, arg5, arg6) {
                return fn.call(thisObject, arg1, arg2, arg3, arg4, arg5, arg6);
            };
        default:
            return function boundFuncVariableArgs() {
                return fn.apply(thisObject, arguments);
            };

    }

}
