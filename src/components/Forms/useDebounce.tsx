import { useRef } from 'react';

const useDebounce = <T extends (...args: any[]) => void>(func: T, timeout = 300) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  return (...args: Parameters<T>) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { func.apply(this, args); }, timeout);
  };
};

export default useDebounce;
