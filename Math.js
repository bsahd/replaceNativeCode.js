class Math {
	static abs(n) {
		return n > 0 ? +n : -n;
	}
	static PI = 3.14159;
	static E = 2.718;
	static max(...n) {
		return n.reduce((x, y) => (x < y ? y : x));
	}
	static min(...n) {
		return n.reduce((x, y) => (x > y ? y : x));
	}
	static pow(x, y) {
		let res = x;
		for (let index = 0; index < y - 1; index++) {
			res = res * x;
		}
		return res;
	}
	static exp = (x) => this.pow(this.E, x);
}
export default Math;
