import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'
function Register() {
  // const[(user, setUser)] = useState({
  // name:"",
  //   email: "",
  //   password: ""
  // });

  // const onChangeInput = e =>{
  //     const {name,value} = e.target;
  //     setUser({...user,[name]:value})
  // }
  // const registerSubmit = async e =>{
  //   e.preventDefault()
  //   try {
  //     await axios.post('/user/register',{...user})
  //     localStorage.setItem('firstRegister',true)

  //     window.location.href="/";
  //   } catch (error) {
  //     alert(error.response.data.msg)
  //   }
  // }

  return (
    <div className="login-page">
      <form
      // onSubmit={registerSubmit}
      >
        <h2>Đăng Ký</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          // value={user.name} onchange={onChangeInput}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          // value={user.email} onchange={onChangeInput}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          autoComplete="on"
          // value={user.password} onchange={onChangeInput}
        />
        <div className="row">
          <button type="submit">Đăng Ký</button>
          <Link to="/login">Đăng Nhập</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
