import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import styles from './DynamicForm.module.css'

export default function DynamicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()

  const changeInput = useWatch({ name: 'username', control })

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(data => console.log(data))}
    >
      <h3 className={styles.inputName}>First fild</h3>
      <input
        id='username'
        type='text'
        placeholder='Username'
        {...register('username', { required: 'Requaried field' })}
      />
      {errors.username && (
        <p className={styles.inputErrors}>{errors.username.message}</p>
      )}

      {!changeInput ? null : (
        <>
          <h3 className={styles.inputName}>Second field</h3>
          <input
            id='email'
            type='text'
            placeholder='email'
            {...register('e-mail')}
          />
        </>
      )}
      <button className={styles.button} type='submit'>
        Submit
      </button>
    </form>
  )
}
