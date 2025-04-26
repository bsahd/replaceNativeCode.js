class XORShift128Plus {
	constructor(seed1 = 123n, seed2 = 456n) {
		if (seed1 === 0n && seed2 === 0n) {
			throw new Error("Seeds must not be both zero.");
		}
		this.s0 = BigInt(seed1);
		this.s1 = BigInt(seed2);
	}

	nextBigInt() {
		let x = this.s0;
		let y = this.s1;
		this.s0 = y;

		x ^= x << 23n;
		x ^= x >> 17n;
		x ^= y ^ (y >> 26n);
		this.s1 = x;

		return (this.s0 + this.s1) & ((1n << 64n) - 1n); // 64bitにマスク
	}
	nextFloat() {
		// 0 <= x < 1 に正しくする（2^64で割る）
		return Number(this.nextBigInt()) / Number(1n << 64n);
	}
}

class Math {
	static xorshift = new XORShift128Plus();
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
		for (let index = 0; index < 2 ** 6; index++) {
			this.xorshift.nextBigInt();
		}
		return this.xorshift.nextFloat();
	}
}
export default Math;
