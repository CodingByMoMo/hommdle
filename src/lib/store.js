import { writable } from "svelte/store";

const guesses = writable([]);
const tries = writable(0);
export { tries, guesses };
