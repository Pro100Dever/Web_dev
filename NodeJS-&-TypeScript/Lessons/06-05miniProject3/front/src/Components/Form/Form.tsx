import { useState } from "react";
import type { IForm, ILoginData, ILoginForm } from "./form.types";
import CustomInput from "../UI/CustomInput";
import axios from "axios";
import Cookies from 'js-cookie'


function Form(props: IForm) {
  const [form, setForm] = useState<ILoginForm>({
    username: "",
    password: "",
  });

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        const response = await axios.post<ILoginData>('http://localhost:3000/api/auth/login', form)
        console.log(response.data)
        Cookies.set('token', response.data.token)
    } catch (error: any) {
        console.error(error.response.data.message)        
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Form</h2>
      <CustomInput
        value={form.username}
        name="username"
        onHandleChange={onHandleChange}
        label="username"
        placeholder="username"
      />
      <CustomInput
        value={form.password}
        name="password"
        onHandleChange={onHandleChange}
        label="password"
        placeholder="password"
      />
      <button>login</button>
    </form>
  );
}

export default Form;
