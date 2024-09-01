# TypeScript Cheatsheet

## Basic Types

1. **Boolean**
   Definition: Represents a true/false value.
   ```typescript
   let isDone: boolean = false;
   ```

2. **Number**
   Definition: Represents both integer and floating-point numbers.
   ```typescript
   let decimal: number = 6;
   let hex: number = 0xf00d;
   let binary: number = 0b1010;
   ```

3. **String**
   Definition: Represents textual data.
   ```typescript
   let color: string = "blue";
   let sentence: string = `The color is ${color}`;
   ```

4. **Array**
   Definition: Represents a list of values.
   ```typescript
   let list: number[] = [1, 2, 3];
   let genericList: Array<number> = [1, 2, 3];
   ```

5. **Tuple**
   Definition: Represents an array with a fixed number of elements whose types are known.
   ```typescript
   let x: [string, number] = ["hello", 10];
   ```

6. **Enum**
   Definition: A way to give friendly names to sets of numeric values.
   ```typescript
   enum Color {Red, Green, Blue}
   let c: Color = Color.Green;
   ```

7. **Any**
   Definition: Represents any JavaScript value.
   ```typescript
   let notSure: any = 4;
   notSure = "maybe a string instead";
   ```

8. **Void**
   Definition: Represents the absence of a type, commonly used as the return type of functions that do not return a value.
   ```typescript
   function warnUser(): void {
     console.log("This is a warning message");
   }
   ```

9. **Null and Undefined**
   Definition: Represent the null and undefined values respectively.
   ```typescript
   let u: undefined = undefined;
   let n: null = null;
   ```

10. **Never**
    Definition: Represents the type of values that never occur.
    ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

## Advanced Types

11. **Union Types**
    Definition: A type that can be one of several types.
    ```typescript
    let value: string | number = "hello";
    value = 42; // OK
    ```

12. **Intersection Types**
    Definition: A type that combines multiple types into one.
    ```typescript
    interface Colorful { color: string; }
    interface Circle { radius: number; }
    type ColorfulCircle = Colorful & Circle;
    ```

13. **Type Aliases**
    Definition: Gives a name to a type.
    ```typescript
    type Point = {
      x: number;
      y: number;
    };
    let point: Point = { x: 10, y: 20 };
    ```

14. **Literal Types**
    Definition: A type that represents a specific value.
    ```typescript
    type Directions = "North" | "East" | "South" | "West";
    let direction: Directions = "North";
    ```

## Functions

15. **Function Types**
    Definition: Describes the shape of a function (parameters and return type).
    ```typescript
    let myAdd: (x: number, y: number) => number = 
      function(x: number, y: number): number { return x + y; };
    ```

16. **Optional Parameters**
    Definition: Parameters that don't need to be provided.
    ```typescript
    function buildName(firstName: string, lastName?: string) {
      return lastName ? `${firstName} ${lastName}` : firstName;
    }
    ```

17. **Default Parameters**
    Definition: Parameters with default values.
    ```typescript
    function greet(name: string = "World") {
      return `Hello, ${name}!`;
    }
    ```

## Interfaces and Classes

18. **Interfaces**
    Definition: Defines a contract for an object's shape.
    ```typescript
    interface LabeledValue {
      label: string;
    }
    function printLabel(labeledObj: LabeledValue) {
      console.log(labeledObj.label);
    }
    ```

19. **Classes**
    Definition: Blueprint for creating objects.
    ```typescript
    class Greeter {
      greeting: string;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
        return "Hello, " + this.greeting;
      }
    }
    ```

20. **Generics**
    Definition: Allows creating reusable components that can work over a variety of types.
    ```typescript
    function identity<T>(arg: T): T {
      return arg;
    }
    let output = identity<string>("myString");
    ```

