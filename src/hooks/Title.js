import { useEffect } from "react";

const Title = (title) => {
  useEffect(() => {
    document.title = `${title} - Crockeries gallery`;
  }, [title]);
};
export default Title;
