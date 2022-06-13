// const URL = "https://alekw.dk/moviefestivalbackend";
const URL = "http://localhost:8080/MovieFestivalBackend_war_exploded";

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function apiFacade() {
    /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/

    const login = (user, password, setResponseText) => {
        const options = makeOptions("POST", true, { username: user, password: password });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setResponseText(res.msg);
                setToken(res.token);
                console.log(res.msg);
            })
    }

    const signup = (user, password, setResponseText) => {
        const options = makeOptions("POST", false, { username: user, password: password });
        return fetch(URL + "/api/signup", options)
            .then(handleHttpErrors)
            .then(res => {
                setResponseText(res.msg);
            })
    }

    const getAllUsers = (setAllUsers) => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/user/users", options)
            .then(handleHttpErrors)
            .then((res) => {
                setAllUsers(res);
            })
    }

    const getAllShows = (setAllShows) => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/show/all", options)
            .then(handleHttpErrors)
            .then((res) => {
                setAllShows(res);
            })
    }

    const getGuestShows = (guestId, setGuestShows) => {
        const options = makeOptions("GET", true);
        return fetch(URL + `/api/guest/${guestId}/shows`, options)
            .then(handleHttpErrors)
            .then((res) => {
                setGuestShows(res);
            })
    }

    const createGuest = (name, phone, email, username, setGuestProfile) => {
        const options = makeOptions("POST", true, { name: name, phone: phone, email: email, status: "Awaiting approval", showList: [] });
        return fetch(URL + `/api/guest/create/${username}`, options)
            .then(handleHttpErrors)
            .then((res) => {
                setGuestProfile(res);
            })
    }

    const checkGuest = (username, setGuestProfile) => {
        const options = makeOptions("GET", true);
        return fetch(URL + `/api/guest/checkguest/${username}`, options)
            .then(handleHttpErrors)
            .then((res) => {
                setGuestProfile(res);
            })
    }

    const attendShow = (guestId, showId, setGuestProfile, updateGuestShows) => {
        const options = makeOptions("GET", true);
        return fetch(URL + `/api/guest/${guestId}/show/${showId}`, options)
            .then(handleHttpErrors)
            .then((res) => {
                console.log(res);
                setGuestProfile(res);
                updateGuestShows();
            })
    }

    const getFestivals = (setFestivals) => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/festival/all", options)
            .then(handleHttpErrors)
            .then((res) => {
                setFestivals(res);
                console.log(res)
            })
    }

    const createFestival = (setFestivals, name, city, startYear, startMonth, startDay, startHour, startMin, endYear, endMonth, endDay, endHour, endMin) => {
        const options = makeOptions("POST", true, {
            name: name,
            city: city,
            startDateTime: {
                date: {
                    year: startYear,
                    month: startMonth,
                    day: startDay
                },
                time: {
                    hour: startHour,
                    minute: startMin,
                    second: 0,
                    nano: 0
                }
            },
            endDateTime: {
                date: {
                    year: endYear,
                    month: endMonth,
                    day: endDay
                },
                time: {
                    hour: endHour,
                    minute: endMin,
                    second: 0,
                    nano: 0
                }
            }
        })
        return fetch(URL + `/api/festival/create`, options)
            .then(handleHttpErrors)
            .then((res) => {
                getFestivals(setFestivals);
            })
    }

    const updateFestival = (setFestivals, id, name, city, startYear, startMonth, startDay, startHour, startMin, endYear, endMonth, endDay, endHour, endMin) => {
        const options = makeOptions("PUT", true, {
            id: id,
            name: name,
            city: city,
            startDateTime: {
                date: {
                    year: startYear,
                    month: startMonth,
                    day: startDay
                },
                time: {
                    hour: startHour,
                    minute: startMin,
                    second: 0,
                    nano: 0
                }
            },
            endDateTime: {
                date: {
                    year: endYear,
                    month: endMonth,
                    day: endDay
                },
                time: {
                    hour: endHour,
                    minute: endMin,
                    second: 0,
                    nano: 0
                }
            }
        })
        return fetch(URL + `/api/festival/${id}`, options)
            .then(handleHttpErrors)
            .then((res) => {
                getFestivals(setFestivals);
            })
    }

    const fetchUserData = (role) => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URL + `/api/info/${role}`, options).then(handleHttpErrors);
    }

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
        // localStorage.clear();
    }

    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        fetchUserData,
        login,
        signup,
        logout,
        getAllUsers,
        getAllShows,
        getGuestShows,
        createGuest,
        checkGuest,
        attendShow,
        getFestivals,
        createFestival,
        updateFestival,
    }
}

const facade = apiFacade();
export default facade;
