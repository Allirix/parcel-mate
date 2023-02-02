import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const routes = ['', 'history', 'locations', 'map'];

export default function useBottombar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return [
    value,
    (event: SyntheticEvent, newValue: number) => {
      navigate(routes[newValue]);
      setValue(newValue);
    },
  ];
}
