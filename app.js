let a = 5;

// let exp1 =((a+5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
// //Ans is NaN
// console.log(exp1);


// let exp2 = 10 * ("foo" && 5+ (++a) || "bar") && (false + "test") || 0 && true;
// // ans is falsetest
// console.log(exp2);


// let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1+2) + "result";
// // ans is NaNresult
// console.log(exp3)


// let exp4 = "hello" * (++a + true) || (2+3 * "abc") * (0+1) + "xyz" && 0;
// //ans is 0
// console.log(exp4);


// let exp5 = (true || (0+1) * "test" && 4) || (false || 3 + "value") * a-- +2;
// // ans is true
// console.log(exp5) 


// let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
// // ans is 11
// console.log(exp6);

// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// //ans is 9 
// console.log(exp7)

// let exp8 = (0+1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
// //ans is 1
// console.log(exp8)


// let exp9 = 3*"abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// //ans is 3result
// console.log(exp9)


// let exp10  = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// // ans is start
// console.log(exp10);


// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// // ans is 20
// console.log(exp11);

// let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// // ans is result
// console.log(exp12);


// let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// //ans is falsetest
// console.log(exp13);


// let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// // ans is end
// console.log(exp14);


// let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// //ans is NaNresult
// console.log(exp15)


// let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// // ans is null
// console.log(exp16);


// let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 0;
// // ans is 0
// console.log(exp17);


// let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// // ans is 0
// console.log(exp18);


// let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// // ans is foo
// console.log(exp19);


// let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
// //  ans is end5
// console.log(exp20);


// let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// // ans is testfalse
// console.log(exp21);


// let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// // ans is test
// console.log(exp22);


// let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// // ans is result
// console.log(exp23);


// let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// // ans is 2
// console.log(exp24)


// let exp25 = (3 + 4) * (false || a--) && 5 //|| "start" + 1 + "test" && 0;
// // ans is 5
// console.log(exp25)


// let exp26 = "hello" && 3*2 + (a++ + 1) || (false + true) * "result" + "end";
// // ans is 11
// console.log(exp26)


// let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// // ans is start5
// console.log(exp27)


// let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// // ans is world
// console.log(exp28)


// let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// // ans is NaNresult
// console.log(exp29)


// let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// // ans is falsevalueend
// console.log(exp30)


// let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// // ans is 3end
// console.log(exp31)


// let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// // ans is 3
// console.log(exp32)


// let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// // ans is end5
// console.log(exp33)


// let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// // ans is hello24
// console.log(exp34)


// let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// // ans is falseend
// console.log(exp35)


// let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// // ans is 8
// console.log(exp36)


// let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// // ans is 2test
// console.log(exp37)


// let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// // ans is 2end
// console.log(exp38)


// let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// // ans is 2
// console.log(exp39)


// let exp40 = (false || "test")  * 5 || 6 + (a-- && "result") * 4;
// // ans is NaN
// console.log(exp40)


// let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// // ans is hello
// console.log(exp41)


// let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// // ans is NaN
// console.log(exp42)


// let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// // ans is start5
// console.log(exp43)


// let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// // ans is value1
// console.log(exp44)


// let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// // ans is 20
// console.log(exp45)


// let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// // ans is test
// console.log(exp46)


// let exp47 = 0 + "result" && (3+1) * 2 || (false + a--) * "end";
// // ans is 8
// console.log(exp47)


// let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" +a--;
// // ans is NaN
// console.log(exp48)


// let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// // ans is 24
// console.log(exp49);


// let exp50 = 32 && true - ++a && "* || * true";
// // ans is * || * true
// console.log(exp50)


// let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// // ans is 49
// console.log(exp51)

















