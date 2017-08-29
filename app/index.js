// We're throwing a concert where we have a limit of 100 tickets

// var limit = 100;

// let limit = 100;
// limit += 100;
// limit = 500;
// console.log(limit);



// const limit = 200;
// // limit += 200;
// console.log(limit);



// const emails = ['frodo@email.com', 'samwise@email.com', 'mary@email.com'];
// emails.push('sam@email.com')
// console.log(emails);




// let limit = 200;
//
// {
//   //we only want a limit of 10 people back stage
//   let limit = 10;
//   console.log('backstage limit', limit)
// }
//
// console.log('overall venue limit', limit);



// let a = `good`;
// let greeting = `${a} morning`;
// console.log(greeting);



// let a = [20, 30, 40];
// let b = [10, ...a, 50];
//
// console.log(b)


// function collect(...a){
//   console.log(a);
// }
//
// collect(3, 6, 9, 12, 15);


// let animals = ['Simba', 'Zazu', 'Ed'];
// let [lion, bird] = animals;
//
// console.log(lion, bird);


// let king = { name: 'Mufasa', kids: 1 };
// let { name, kids } = king;
// console.log(name, kids);

// setTimeout(() => {
//   console.log('Woohoo!');
// }, 3000);


// let cheer = () => {
//   console.log("Whoohoo!");
// }

// let values = [20, 30, 40];
//
// let doubled = values.map((n) => {
//   return n*2 });
// console.log(doubled);

let points = [10, 2, 23, 43, 3, 4, 1]

let highScores = points.filter((n) => {return n>10})

console.log(highScores);
