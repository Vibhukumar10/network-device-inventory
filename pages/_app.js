import "../styles/globals.css";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import Loading from "../components/Loading";
import { useRouter } from "next/router";
import { useState } from "react";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
TimeAgo.addDefaultLocale(en);

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  const [progress, setProgress] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setProgress(true);
    };
    const handleStop = () => {
      setProgress(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading || progress) {
    return <Loading />;
  }

  if (!user) {
    return <Login />;
  } else
    return (
      <>
        {/* <Topbar /> */}
        <Component {...pageProps} />
        <Footer />
      </>
    );
}

export default MyApp;
