import { useState } from "react";
import { createContext } from "react";
export const LangContext = createContext({
 theme: null,
 setTheme: () => {},
});

export const strings = {
  id: {
    "username":"Nama Pengguna",
    "password": "Kata Sandi",
    "login":"Masuk",
    "register":"Daftar",
    "forget":"Lupa"
  },
  en: {
    "username":"Username",
    "password": "Password",
    "login":"Login",
    "register":"Register",
    "forget":"Forget"
  }
}

  export default function App(){
  const [lang, setLang] = useState("id");
    return(
      <>
      <LangContext.Provider value={{lang,setLang}}>
      <select onChange={(e)=>{
        e.preventDefault();
        setLang(e.target.value);
      }}>
        <option value="id">Indo</option>
        <option value="en">Eng</option>
      </select>
      <form action="">
      <div className="flex flex-col">
        <label >{strings[lang].username}
        <input/></label>
        <label >{strings[lang].password}
        <input type="text" /></label>
        <button >{strings[lang].login}</button>
        <button >{strings[lang].register}</button>
        <button>{strings[lang].forget}</button>
        </div>
      </form>

      </LangContext.Provider>
      </>
    )
  }
