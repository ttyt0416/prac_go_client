import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/constants";

export default function SignUp() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalidId, setInvalidId] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const signup = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const res = axios.post(`${BASE_URL}/users`, {
        name: id,
        password: password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        className="w-full flex flex-col items-center"
        onSubmit={() => signup()}
      >
        <input
          type="text"
          placeholder="ID"
          className="input input-md input-bordered w-full max-w-md"
          value={id}
          onChange={(ev) => setId(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-8 input input-md input-bordered w-full max-w-md"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="mt-8 btn btn-outline">Submit</button>
      </form>
    </div>
  );
}
