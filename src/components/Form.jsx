import { useForm } from "react-hook-form"
import { Select } from "./selectTag/Select"
import { TextInput } from "./TextInput"

export const Form = () => {

  const {register, handleSubmit} = useForm();

  const sendForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(sendForm)} className="w-full flex flex-col gap-4">
      <TextInput
        id="first-name"
        label="First Name"
        type="text"
        placeholder="Joe"
        {...register("firstName")}
      /> 
      
      <TextInput
        id="last-name"
        label="Last Name"
        type="text"
        placeholder="Bonand"
        {...register("lastName")}
      />

      <TextInput
        id="email"
        label="Email Address"
        type="email"
        placeholder="email@example.com"
        {...register("email")}
      /> 

      <TextInput
        id="date"
        label="Date Born"
        type="date"
        placeholder="dd/mm/aa"
        {...register("dateBorn")}
      />

      <Select label="Country" id="country" {...register("country")} />

      <TextInput
        id="Photo"
        label="Upload your photo"
        type="file"
        styleInput=" text-Grey-900-darker"
        {...register("Photo")}
      />

      <TextInput 
        id="password"
        label="Password"
        type="password"
        placeholder="******"
        {...register("password")}
      />

      <TextInput
        id="confirm-password"
        label="Confirm Password"
        type="password"
        placeholder="******"
        {...register("confirmPassword")}
      />

      <TextInput
        id="terminos"
        label="I accept the terms and conditions"
        type="checkbox"
        styleContainer="flex-row items-center gap-4"
        styleLabel="order-2"
        styleInput="outline-none order-1 size-5 rounded-xl"
        {...register("terminos")}
      />

      <button className="w-full bg-Green-600-medium text-Green-200-lighter font-bold rounded-lg py-3 text-xl cursor-pointer hover:bg-Grey-900-darker duration-200 ease-in">Submit</button>
    </form>
  )
}
