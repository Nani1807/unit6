let MathFramework = {
  Result: null,

  calculate() {
    let sum = 0;
    if (typeof this.property1 === 'number') {
      sum += this.property1;
    } else if (Array.isArray(this.property1)) {
      for (let i = 0; i < this.property1.length; i++) {
        sum += this.property1[i];
      }
    }

    if (typeof this.property2 === 'number') {
      sum += this.property2;
    } else if (Array.isArray(this.property2)) {
      for (let i = 0; i < this.property2.length; i++) {
        sum += this.property2[i];
      }
    }

    this.Result = sum; 
  },

  setProperty1(value) {
    this.property1 = value;
  },

  setProperty2(value) {
    this.property2 = value;
  }
};

MathFramework.setProperty1(3);
MathFramework.setProperty2([5, 6]);
MathFramework.calculate();
console.log(MathFramework.Result);
