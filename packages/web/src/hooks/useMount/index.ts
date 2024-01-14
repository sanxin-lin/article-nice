import { useEffect } from 'react';
import { isFunction } from 'lodash-es';

const useMount = (fn: () => void) => {
  useEffect(() => {
    if (isFunction(fn)) {
      fn();
    }
  }, []);
};

export default useMount;
