import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debouncedvalue, setdebouncedvalue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => setdebouncedvalue(value), delay);

            return () => clearTimeout(handler)

        }, [value, delay]);

        return debouncedvalue
}

export default useDebounce;