import { Form } from "./Form"

export const FormContainer = () => {
  return (
    <main className="max-w-[352px] bg-White mx-auto rounded-2xl p-5 md1:max-w-[560px]">
      <h2 className="text-Grey-900-darker font-bold text-[32px] pb-5">Contact Us</h2>
      
      <Form />
    </main>
  )
}
