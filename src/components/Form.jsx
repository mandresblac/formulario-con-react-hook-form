import { useForm } from "react-hook-form"
import { Select } from "./selectTag/Select"
import { TextInput } from "./TextInput"

export const Form = () => {

  const {
    register,
    handleSubmit,
    formState : {errors}
  } = useForm();

  console.log(errors);

  const sendForm = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={sendForm} className="w-full flex flex-col gap-4">
      <TextInput
        id="first-name"
        label="First Name"
        type="text"
        placeholder="Joe"
        {...register("firstName", {
          required: { value: true, message: "This field is required"}, 
          minLength: {value: 3, message: "The field must have a minimum of 3 characters"},
          maxLength: {value: 20, message: "The field must have a maximun of 20 characters"}
        })}
        isError={errors.firstName}
        errorMessage={errors.firstName?.message}
      />
      
      <TextInput
        id="last-name"
        label="Last Name"
        type="text"
        placeholder="Bonand"
        {...register("lastName", { 
          required: { value: true, message: "This field is required"}, 
          minLength: {value: 3, message: "The field must have a minimum of 3 characters"},
          maxLength: {value: 20, message: "The field must have a maximun of 20 characters"}
        })}
        isError={errors.lastName}
        errorMessage={errors.lastName?.message}
      />

      <TextInput
        id="email"
        label="Email Address"
        type="email"
        placeholder="email@example.com"
        {...register("email", {
          required: {value: true, message: "This field is required"},
          pattern: { value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, message: "Email invalid"}
        })}
        isError={errors.email}
        errorMessage={errors.email?.message}
      /> 

      <TextInput
        id="date"
        label="Date Born"
        type="date"
        placeholder="dd/mm/aa"
        {...register("dateBorn", {
          required: {value: true, message: "This field is required"},
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            return edad >= 18 || "You must be over 18 years old"
          }
        })}
        isError={errors.dateBorn}
        errorMessage={errors.dateBorn?.message}
      />

      <Select
        label="Country"
        id="country"
        {...register("country" , {required: true})}
      />

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
        {...register("password", {
          required: {value: true, message: "This field is required"},
        })}
        isError={errors.password}
        errorMessage={errors.password?.message}
      />

      <TextInput
        id="confirm-password"
        label="Confirm Password"
        type="password"
        placeholder="******"
        {...register("confirmPassword", {required: true})}
      />

      <TextInput
        id="terminos"
        label="I accept the terms and conditions"
        type="checkbox"
        styleContainer="flex-row items-center gap-4"
        styleLabel="order-2"
        styleInput="outline-none order-1 size-5 rounded-xl"
        {...register("terminos", {required: true})}
      />

      <button className="w-full bg-Green-600-medium text-Green-200-lighter font-bold rounded-lg py-3 text-xl cursor-pointer hover:bg-Grey-900-darker duration-200 ease-in">Submit</button>
    </form>
  )
}
