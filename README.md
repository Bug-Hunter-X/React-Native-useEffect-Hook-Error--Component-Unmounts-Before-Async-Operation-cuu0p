# React Native useEffect Hook Error: Component Unmounts Before Async Operation

This repository demonstrates a common error in React Native applications where an asynchronous operation initiated within a `useEffect` hook continues after the component has unmounted, leading to errors related to accessing undefined state.

## Problem

The provided `bug.js` file shows a component that fetches data using `fetch` within `useEffect`. If the component unmounts before the `fetch` completes, attempting to update state afterward results in an error because the component instance is no longer available.

## Solution

The solution, shown in `bugSolution.js`, addresses this by using a cleanup function inside the `useEffect` hook. This function cancels any ongoing asynchronous operations when the component unmounts, preventing the error.  An additional check is also added to verify that the component is still mounted before updating state.