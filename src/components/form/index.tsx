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
      <div className={styles.div}>
        <form className={styles.form}>
          <input
            type="name"
            id="name"
            className={styles.input}
            placeholder='Nome'
            {...register("name")}
          />
          <p>{errors.name?.message}</p> 
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder='E-mail'
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="phone"
            id="phone"
            className={styles.input}
            placeholder='Telefone'
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>
          <div className={styles.divButtons}>
            <button className={styles.button} onClick={handleSubmit(sendWpp)}>WhatsApp</button>
            <button className={styles.button} onClick={handleSubmit(sendEmail)}>Email</button>
          </div>
        </form>   
      </div>
    )
}