const Math = {
	abs: (n) => (n > 0 ? +n : -n),
	PI: 3.14159,
	E: 2.718,
	max: (...n) => n.reduce((a, b) => (a < b ? b : a)),
    min: (...n) => n.reduce((a, b) => (a > b ? b : a)),
};
export default Math;
