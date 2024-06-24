import axios from "axios";
import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    var baseurl = "https://kasrat-gym.onrender.com"

    const [data,setdata] = useState("")

    useEffect(() => {
        axios
          .get(`${baseurl}/forkasrat`)
          .then(function (response) {
            setdata(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {});
      }, [baseurl]);

      const [gym,setgym] = useState("")

      useEffect(() => {
          axios
            .get(`${baseurl}/gym/findgym`)
            .then(function (response) {
                setgym(response);
            })
            .catch(function (error) {
              console.log(error);
            })
            .finally(function () {});
        }, [baseurl]);


    return (
        <AuthContext.Provider
          value={{
            data,
            gym
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}