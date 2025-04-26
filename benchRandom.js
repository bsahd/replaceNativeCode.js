import Math from "./Math.js"
console.log("start")
const start = performance.now()
for (let index = 0; index < 100; index++) {
    console.log(`${index}/100: ${Math.random()}`)
}
console.log(`${(performance.now() - start)/100}ms per iterate`)