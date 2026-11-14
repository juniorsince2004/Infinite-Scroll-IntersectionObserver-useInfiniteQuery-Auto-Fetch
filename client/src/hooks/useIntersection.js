import { useEffect } from "react";

// TODO: implement this custom hook.
//
// It should observe the element held in `ref` and call `onIntersect()` whenever
// that element scrolls into the viewport.
//
// Steps:
//   1. Inside a useEffect, read el = ref.current; if it's null, return early.
//   2. Create: new IntersectionObserver((entries) => { ... }, { threshold: 0.1 })
//      — when entries[0].isIntersecting is true, call onIntersect().
//   3. observer.observe(el) to start watching.
//   4. Return () => observer.disconnect() so the observer is cleaned up on unmount.
//   5. Dependency array: [ref, onIntersect].
export default function useIntersection(ref, onIntersect) {
  useEffect(() => {
    // your code here

    const el = ref.current;

    // Stop if the sentinel does not exist yet
    if (el === null) return;

    // Create an observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
    {
     threshold: 0.1,
     rootMargin: "300px",
    }
    );

    // Start observing the sentinel
    observer.observe(el);

    // Clean up when the component unmounts
  }, [ref, onIntersect]);
}
