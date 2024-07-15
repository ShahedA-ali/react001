import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth({children}) {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
	useEffect(() => {
        (async function verify() {
            fetch("http://localhost:8000/api/auth/verify", {
                headers: { "Authorization": "Bearer " + document.cookie.split('=')[1] }
            })
                // .catch(history.push('/login'))
                .then((response) => response.json())
                .then((res) => {
                    console.log(res, res.result);
                    if (res.status == 'success') {
                        setAuth(res.data.user);
                        console.log("token");
                    } else {
                        setAuth(false);
                        navigate('/login')
                    }
                    console.log(auth, document.cookie);
                });
        })();
    }, []);
    console.log(auth)
  return (
    <> {auth && React.cloneElement(children, {user: auth})} </>
    // <>
    // {auth && <Main user={auth} />}
    // </>
  )
}

export default Auth