import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import routes from '../routes';
import { Pages } from '../routes/types';

export default function useBottombar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return {
    value,
    onChange: (event: SyntheticEvent, idx: Pages) => {
      navigate(routes[idx].path as string);
      setValue(idx);
    },
  };
}
