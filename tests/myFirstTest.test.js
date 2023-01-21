const { sum,deleteUserById,findUserById } = require("../utils/helper")

let userdata = [];
console.log(userdata,"before all functions")

beforeAll(() => {

    userdata = ['Lois','Sarah']
    console.log("runs before all tests",userdata)
})


beforeEach(() => {
    console.log("running before each test")
})

afterEach(() => {
    console.log("running after each test")
})

afterAll(() => {
    userdata = [];
    console.log("running after all tests have run",userdata)
})


describe("Number Operations", () => {
  
    
    test("1 plus 1 should be equal to 2",() => {
    let a = 1;
    let b = 1;
    expect(a + b).toBe(2)
    
    })


    test("5 plus 6 is not equals to 10",() => {
    let a = 5;
    let b = 6;

    expect(a + b).not.toBe(10)
    })

})


describe("Testing other matcher methods", () => {
     
    test("Testing that a variable is undefined", () => {
        let number = undefined;

        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy()
    })
    

    test("Should expect zero to act like zero", () => {
        let number = 0;

        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();

    })


    test("Number Comparison",() => {
        const a = 1;
        const b = 2;
        expect(a + b).toBeGreaterThan(2);
        expect(a + b).toBeGreaterThanOrEqual(3);
        expect(a + b).toBeLessThan(10);
        expect(a + b).toBeLessThanOrEqual(5);
    })
})


describe("Test for Strings", () => {

    test("there should be no I in team", () => {
        let string = 'team';

        expect(string).not.toMatch(/I/);
    })

    
    test("there is stop in christopher", () => {
        let string = 'Christopher';

        expect(string).toMatch(/stop/i); //the i signifies case sensitive
    })
})


describe("Test on Arrays", () => {
     const shoppingList = ["Milk","Trash Bags","Paper Towels","Iphones"];

     test("the shopping list doesn't have PS4", () => {
        expect(shoppingList).not.toContain('PS4')
        expect(shoppingList).toContain('Milk')
        expect(shoppingList[0]).toMatch(/I/i)
     })
})

//testing primitive and reference type equality 
describe("Testing Reference equality", () => {
    const user = {
        name:'Johnson'
    }
    user['age'] = 45;

    test("Should return a user object with age as 45", () => {
        expect(user).toEqual({
            name:'Johnson',
            age: 45
        })
    })

    test("Should return a user with a name and age key",() => {
         expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age:expect.any(Number)
            })
         )
    })

    //TESTING ARRAY EQUALITY
    test("Array Equality",() => {
        const users = ["Charles","Kelvin","Samuel","Benson"]

       

        users.push("Jacob")
        
        expect(users).toEqual(["Charles","Kelvin","Samuel","Benson","Jacob"])
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]))

        const userObjectInArray = [
            {
                user:"Sarah",
                age:23
            },

            {
                user:"Clark",
                age:32
            },

            {
                user:"Mark",
                age:28
            }

        ]

        userObjectInArray.push({
            name:"Phil",
            age:45
        })

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number)
                })
            ])
        )
    })
})


describe("Testing imported functions", () => {

    test("Sum function should add 2 numbers",() => {
         expect(sum(5,4)).toBe(9)
    })

    test("delete by id function should delete a user by their id",() => {
        const users = [
            {
                name:"Clark",
                age:32,
                id:1,
            },
            {
                name:"Johnson",
                age:24,
                id:2,
            },
            {
                name:"Robert",
                age:27,
                id:3,
            }

        ]
      
         expect(deleteUserById(users,3)).toEqual([
            {
                name:"Clark",
                age:32,
                id:1,
            },
            {
                name:"Johnson",
                age:24,
                id:2,
            },
         ])
    })


    //Test Driven Development
    test("Finds a user by ID from a list of users",() => {
        const students = [
            {
                name:"Felix",
                age:23,
                id:1
            },
            {
                name:"Joshua",
                age:21,
                id:2
            },
            {
                name:"Luke",
                age:26,
                id:3
            },


        ]
        expect(findUserById(students, 2)).toEqual({
            name:"Joshua",
                age:21,
                id:2
        })

        expect(findUserById(students, 10)).toBeUndefined()
    })
})