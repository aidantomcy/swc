//// [anyAsConstructor.ts]
// any is considered an untyped function call
// can be called except with type arguments which is an error
var x;
new x(), new x("hello"), new x(x), new x(x);
 // no error
