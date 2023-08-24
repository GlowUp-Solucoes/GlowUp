"use client"

import styles from './index.module.css'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"


export interface iFormData {
  name: string;
  email: string;
  phone: number;
}

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório!"),
  email: yup.string().email().required("Email é obrigatório!"),
  phone: yup.number().required("Número é obrigatório!"),
});



const sendWpp = (data: iFormData) => {
  const number = 3391531299
  const text = `Nome: ${data.name} \nEmail: ${data.email}`

  const encodedMessage = encodeURIComponent(text);
  const wppLink = `https://wa.me/55${number}?text=${encodedMessage}`
  
  window.open(wppLink, '_blank'); 
}

const sendEmail = (data: iFormData) => {



  console.log("email")
}

export default function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<iFormData>({
    resolver: yupResolver(schema),
  });

    return (
      <form className={styles.form}>
        <label htmlFor="name">Nome</label>
        <input
          type="name"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="email">Telefone</label>
        <input
          type="phone"
          id="phone"
          placeholder="Digite aqui seu número"
          {...register("phone")}
        />
        <p>{errors.phone?.message}</p>

        <div>
          <button onClick={handleSubmit(sendWpp)}>Wpp</button>
          <button onClick={handleSubmit(sendEmail)}>Email</button>
        </div>
      </form>   

    )
}