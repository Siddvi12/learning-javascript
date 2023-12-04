// for loop simple
array = [1, 12, 5, 5, 1, 5, 81, 5, 71, 5];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}
// ctrl+d to select same words

for (let i = 0; i < 10; i++) {
  //   console.log(`inner loop value ${i}`);
  for (let j = 0; j < 10; j++) {
    const element = array[j];
    // console.log(`inner loop value ${j} and outer loop${i}`);
    console.log(`${i}*${j}=${i * j}`);
  }
}

let myArray = ["flash", "batman", "superman"];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

// chote mote keywords = continue and break

for (let i = 0; i < 20; i++) {
  if (i === 5) {
    console.log(`5 detected`);
    // break;
    continue; // ek baar maaf kr do
  }
  console.log("value of i ="+ i);
}
