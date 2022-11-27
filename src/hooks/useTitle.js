import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - CrockeriesGallery`;
  }, [title]);
};
export default useTitle;
