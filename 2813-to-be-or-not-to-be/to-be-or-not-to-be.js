/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    var obj = {
        toBe: (val1) => {
            if (val1 === val) return true;
            else throw new Error("Not Equal")
        },
        notToBe: (val2) => {
            if (val2 !== val) return true;
            else throw new Error("Equal")
        }
    }
    
    return obj
    // throw new Error('Hello')
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */