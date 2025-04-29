// breck
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}


// output
// 1
// 2
// 3
// 4
// 5

// continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);        // 1 2 3 4 
}
