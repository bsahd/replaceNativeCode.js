# replaceNativeCode.js

置き換えれる組み込み関数を可能な限り置き換えたらどうなるのか？という至極無駄な実験をしたい

## 協力

プルリクとか投げれるんだったら投げてください、大歓迎です

## 規約

著作権は放棄します！こんなのの著作権持っててもしゃーないし……  
ようは勝手に使ってください、私含め制作に関わったすべての人は責任を取りません

---

## 置き換えたメソッド/プロパティ

- `Math.abs()`
- `Math.max()`
- `Math.min()`
- `Math.pow()`
- `Math.exp()`
- `Math.sign()`
- `Math.trunc()`
- `Math.random()` - 独自のXORShift128+実装です。1.2msくらいかかるはず
  - `Math.random32()`
- `Math.PI`
- `Math.E`
