import { useState } from "react";
import { debounce } from "./debounce";

export default function Search() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchAPI = (text) => {
    if (!text) {
      setSuggestions([]);
      return;
    }

    const result = ["apple", "ball", "banana", "bat", "cat"].filter((x) =>
      x.startsWith(text.toLowerCase())
    );

    setSuggestions(result);
  };

  // Debounced version of API
  const debouncedSearch = debounce(searchAPI, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value); // 🔥 Direct call here
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {suggestions.map((s) => (
        <p key={s}>{s}</p>
      ))}
    </div>
  );
}


//export from separate file
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
