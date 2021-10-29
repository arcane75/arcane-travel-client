import { useState, React, useEffect } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import Header from "../Header/Header";


initializeAuthentication();

const UserLogin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInUsingGoogle()

            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_uri);
                console.log(user);
                setError('');
                logOut();
            })
            .catch(error => {
                setError(error.message);
            })

        return user;
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                history.push(redirect_uri);
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })

        return user;
    }

    //Sign out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            history.push("/home");
        })
            .finally(() => setIsLoading(false));
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }



    return (
        <>
            <Header></Header>

            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Please {isLogin ? 'Login' : 'Register'} </p>

                                            <form onSubmit={handleRegistration} className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" onBlur={handleEmailChange} placeholder="Your Email" required />

                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" onBlur={handlePasswordChange} placeholder="Password" />

                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <div className="col-sm-10 offset-sm-2">
                                                        <div className="form-check">
                                                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                                            <label className="form-check-label" htmlFor="gridCheck1">
                                                                Already Registered?
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row mb-3 text-danger">{error}</div>


                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg"> {isLogin ? 'Login' : 'Register'}</button>
                                                </div>

                                                <div className="divider d-flex align-items-center my-4">
                                                    <p className="text-center fw-bold mx-3 mb-0">----------------- Or -------------------</p>
                                                </div>

                                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                                    <p className="lead fw-normal mb-0 me-3">Sign {isLogin ? 'in' : 'up'} with</p>
                                                    <button type="button" className="btn btn-primary btn-floating mx-1 w-25" onClick={handleGoogleLogin} >
                                                        <i className="fab fa-google"></i>
                                                    </button>

                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default UserLogin;

