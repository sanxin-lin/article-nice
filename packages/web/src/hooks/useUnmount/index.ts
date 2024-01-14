import { useEffect } from 'react';
import { isFunction } from 'lodash-es';
import useLatest from '../useLatest';

const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(() => {
    return () => {
      if (isFunction(fnRef.current)) {
        fnRef.current();
      }
    };
  }, []);
};

export default useUnmount;
