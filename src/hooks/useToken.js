import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("crockeriesToken", data.crockeriesToken);
            setToken(data.crockeriesToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
