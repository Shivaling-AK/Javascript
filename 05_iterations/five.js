// for each loop
/**
 * forEach() is a method used to execute a function once for each element in an array.
 * forEach() can give you both value and index
 * 
 * Important difference: forEach() is an array method, while for...of works with iterables such as Arrays, Strings, Maps, and Sets.
 * Also, forEach() cannot be stopped with break or continue like a normal for loop.
 * 
 * forEach() is an array method that executes a callback function for every element of the array.
 */

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// callback function
// coding.forEach( function (val) {
//     console.log(val);
// } );

// arrow function
// coding.forEach( (variable) => {
//     console.log(variable);
// } )


// function printMe(item){
//     console.log(item); 
// }

// coding.forEach(printMe); // Here only give referrence it will print the output

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
} )


const myCoding = [
    {
        languageName : 'Javascript',
        languageFileName : "js"
    },

    {
        languageName : 'Java',
        languageFileName : "java"
    },

    {
        languageName : 'Python',
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
    // Javascript
    // Java
    // Python
} )

myCoding.forEach( (item, index) => {
    // console.log(index);
    // 0
    // 1
    // 2
} )

myCoding.forEach( (item, index, arr) => {
    console.log(arr);

    // [
    //     { languageName: 'Javascript', languageFileName: 'js' },
    //     { languageName: 'Java', languageFileName: 'java' },
    //     { languageName: 'Python', languageFileName: 'py' }
    //   ]
    //   [
    //     { languageName: 'Javascript', languageFileName: 'js' },
    //     { languageName: 'Java', languageFileName: 'java' },
    //     { languageName: 'Python', languageFileName: 'py' }
    //   ]
    //   [
    //     { languageName: 'Javascript', languageFileName: 'js' },
    //     { languageName: 'Java', languageFileName: 'java' },
    //     { languageName: 'Python', languageFileName: 'py' }
    //   ]
} )