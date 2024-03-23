import { useState, useEffect } from 'react';

const BASE_URL = 'https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1'

export function useFetch(url: string) {
    const [data, setData] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const controller = new AbortController();
    const signal = controller.signal;

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            setTimeout(() => controller.abort(), 3000);
            try {
                const response = await fetch(`${BASE_URL}/${url}`, { signal });
                const json = await response.json();
                if (response.ok) {
                    setData(json);
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error: any) {
                setError(error);
            } finally {
                setIsFetching(false);
            }
        }
        if (isMounted) fetchData();
        return () => { isMounted = false }
    }, [url]);

    return { data, isFetching, error };
}
