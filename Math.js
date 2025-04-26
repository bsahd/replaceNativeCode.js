class XORShift {
	constructor(seed = Date.now()) {
		this.x = seed || 123456789;
		this.y = 362436069;
		this.z = 521288629;
		this.w = 88675123;
	}

	next() {
		let t = this.x ^ (this.x << 11);
		this.x = this.y;
		this.y = this.z;
		this.z = this.w;
		this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8));
		return this.w >>> 0; // 符号なし32bit整数
	}

	nextFloat() {
		return this.next() / 0xffffffff;
	}
}

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
		return x ** y;
	}
	static exp(x) {
		return this.pow(this.E, x);
	}
	static random() {
		const xs = new XORShift();
		for (let index = 0; index < 1024; index++) {
			xs.next();
		}
		return xs.nextFloat();
	}
}
export default Math;
console.log(Math.random());
