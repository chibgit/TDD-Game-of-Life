const {verifyCell} = require('./gameOfLife.js');

describe("cell requirements", ()=>{

    it("any live cell should have an ALIVE state", ()=>{
        const result = verifyCell("ab345678");
        expect(result.ALIVE).to.equal(1);
      })

      it("any live cell should have a DEAD state", ()=>{
        const result = verifyCell("ab345678");
        expect(result.DEAD).to.equal(0);
      })

    it("any live cell should die if it has fewer than two neighbours", ()=>{
      const result = verifyCell("ab345678");
      expect(result).toBe(false);
    })

    it("any live cell should die with more than three neighbours", ()=>{
        const result = verifyCell("ab3456789");
        expect(result).toBe(true);
      })

      it("any live cell should live with two or three live neighbours", ()=>{
        const result = verifyCell("ab3456789");
        expect(result).toBe(true);
      })

      it("any live cell should come alive with exactly three neighbours", ()=>{
        const result = verifyCell(null);
        expect(result).toBe(false);
      })

  })