let MathFramework = {
    Result: null,
    calculate: function(a, b) {
      this.Result = a + b; 
    }
  };
  MathFramework.calculate(5, 7); 
console.log(MathFramework.Result); 
