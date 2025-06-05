function array_reduce(array, callback, firstValue) {
	let reduce = firstValue ?? array[0];
	for (
		let index = typeof firstValue == "undefined" ? 1 : 0;
		index < array.length;
		index++
	) {
		reduce = callback(reduce, array[index],index,array);
	}
	return reduce;
}
function array_map(array, callback) {
  const res = [];
  for (
		let index = 0;
		index < array.length;
		index++
	) {
		res.push(callback(array[index],index,array))
	}
}
console.log(
	array_reduce(
		Array.from({ length: 6 }, (_, a) => a),
		(a, b) => a + b,
	),
);
