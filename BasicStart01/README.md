## React Counter 
 In this code, we have a functional component called `App`. Inside this component, we use the `useState` hook to create a state variable called `count`. The initial value of `count` is 0.
 
 We have two functions, `AddValues` and `RemoveValues`, which are used to increment and decrement the value of `count`, respectively. These functions are called when the corresponding buttons are clicked.

The `AddValues` function checks if the current value of `count` is less than 20 before incrementing it. This ensures that the count value never exceeds 20.

The `RemoveValues` function checks if the current value of `count` is greater than 0 before decrementing it. This ensures that the count value never goes below 0.

Finally, we return the JSX code that displays the current value of `count`, along with the buttons