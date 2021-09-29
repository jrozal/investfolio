import { useState } from "react";

const useModals = () => {
  const [open, setModal] = useState<boolean | string | undefined>(false);
  const toggle = (modal?: string) => setModal(modal || !open);
  return { open, toggle }
};

export default useModals;