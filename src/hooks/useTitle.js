import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Crockeries Gallery`;
  }, [title]);
};
export default useTitle;
