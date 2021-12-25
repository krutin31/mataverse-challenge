import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, useError, user, isUserUpdating } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter NEW username, current username is ${user.getUsername()}`
    );
    if (!username) return;
    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button className="hover:text-pink-700" onClick={setUsername}>Change username</button>
    </div>
  );
}

export default ChangeUsername;
