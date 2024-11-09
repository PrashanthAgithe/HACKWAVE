import React from 'react';

const UserContext=React.createContext();

const UserProvider=({children})=>{
  const [username,setusername]=React.useState('ravi');
  const [email,setemail]=React.useState('ravi@gmail.com');
  const [isblind,setisblind]=React.useState(true);
  return (
    <UserContext.Provider
      value={{
        username,setusername,email,setemail,isblind,setisblind,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserContext,UserProvider};