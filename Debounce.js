const debouncedFn = (fn, delay) => {
  let timeOutId;
  return (...args) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const useDebounce = (query, delay) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const timeoutref = useRef(null);
  useEffect(() => {
    timeoutref.current = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(timeoutref);
    };
  }, [query]);

  return debouncedQuery;
};

const throttle = (fn, delay) => {
  let isexecuted = false;

  return (...args) => {
    if (isexecuted) return;
    fn(...args);
    isexecuted = true;
    setTimeout(() => {
      isexecuted = false;
    }, delay);
  };
};
