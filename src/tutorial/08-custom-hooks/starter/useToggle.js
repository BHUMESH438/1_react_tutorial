import { useState } from 'react';

export default function useToggle(arg) {
  const [show, setShow] = useState(arg);
  const toggle = () => setShow(!show);
  return [show, toggle];
}
