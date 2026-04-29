## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative
   The program is a sequence of commands that tell the computer how to perform a task step-by-step. It relies on changing the state of the program (such as modifying the values of variables) as the execution progresses.
   1. [5 points] Object Oriented
   The program is organized into "objects" that represent real-world or abstract entities. Each object bundles together its own fields and methods. The program runs by having these objects interact with one another
   1. [5 points] Functional
   The program is viewed as a series of mathematical functions that calculate values. It focuses on what to compute rather than how to do it. Key principles include immutability and avoiding "side effects," meaning a function's output depends only on its input.
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
Better Organization,it groups data and functions into objects, making the code cleaner and organized.improved readability and it prevents code repetition because you can define logic once in a class and reuse it.
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?
The main improvemants:
Immutability- prevents bugs where one part of the program accidentally changes data used by another part.
Predictability- Functions only depend on their input and don't rely on hidden internal states. 
Easier Parallelism- there is no shared "state" that changes,therefor it is much easier and safer to run different parts of the code at the same time.
### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.
```ts
const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
  const discountedProducts = inventory.filter(p => p.discounted==true);
  return discountedProducts.length === 0 
  ?0
  : discountedProducts.map(p=>p.price).reduce((acc, curr) => acc + curr, 0)/discountedProducts.length;

};
```
### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
<T>(x:T[],y:(a:T)=>boolean)=>boolean
2. [3 points] `x => x.map(y => y * 2)`
(x:number[])=>number[]
3. [3 points] `(x, y) => x.filter(y)`
<T>(x:T[],y:(a:T)=>boolean)=>T[]
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
(x:number[])=>number
5. [3 points] `(x, y) => x ? y[0] : y[1]`
<T>(x:boolean , y:T[])=>T
6. [3 points] `(f,g) => x => f(g(x+1))`
<U, V>(f: (u: U) => V, g: (n: number) => U) => (x: number) => V
