import React, {useState, useEffect} from 'react';
import * as RNLocalize from 'react-native-localize';
import Context from './Context';

function MyProvider({children}) {
  const [info, setInfo] = useState({});
  const [user, setUser] = useState({});
  const [login, setLogin] = useState({email: '', password: '', status: true});

  useEffect(() => {
    const {countryCode, languageCode} = RNLocalize.getLocales()[0];
    setInfo({country: countryCode, language: languageCode});
  }, []);

  const obj = {info, user, setUser, login, setLogin};

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;
