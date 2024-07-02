import { useEffect, useState } from 'react';

function Auth({children}) {
    const [auth, setAuth] = useState(false);

	useEffect(() => {
        (async function verify() {
            fetch("http://localhost:8000/api/users/verify", {
                headers: { "Authorization": "Bearer " + document.cookie.split('=')[1] }
            })
                // .catch(history.push('/login'))
                .then((response) => response.json())
                .then((res) => {
                    console.log(res, res.result);
                    if (res.result) {
                        setAuth(true);
                        console.log("token");
                    } else {
                        setAuth(false);
                        // history.push("/login");
                    }
                    console.log(auth, document.cookie);
                });
        })();
    }, []);
  return (
    <> {children} </>
  )
}

export default Auth