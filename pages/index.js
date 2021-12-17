import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>You are logged in !!</h2>
      <button
        className="bg-red-400 rounded-lg p-3 font-bold animate-pulse"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
