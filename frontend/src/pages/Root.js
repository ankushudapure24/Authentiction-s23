import { useEffect } from "react";
import MainNavigation from "../components/MainNavigation";

import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../utils/auth";


function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if(token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDurtion = getTokenDuration();
    console.log(tokenDurtion);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDurtion);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
