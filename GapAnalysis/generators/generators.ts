
//iterators
interface MyIteratorResult {
  value: number;
  done: boolean;
}

class MyIterator implements Iterator<number> {
  private current = 0;

  next(): MyIteratorResult {
    this.current++;
    return {
      value: this.current,
      done: this.current > 5,
    };
  }
}

const it = new MyIterator();

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }


const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let i = this.from;
    return {
      next: () => ({
        value: i,
        done: i++ > this.to
      })
    };
  }
};

console.log([...range]); // [1, 2, 3]


const range1 = {
  *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
  };


console.log([...range]); // [1, 2, 3]



//generator
function* numberGen() {
  yield 10;
  yield 20;
  yield 30;
}

const gen = numberGen();

console.log(gen.next()); // { value: 10, done: false }
console.log(gen.next()); // { value: 20, done: false }
console.log(gen.next()); // { value: 30, done: false }
console.log(gen.next()); // { value: undefined, done: true }