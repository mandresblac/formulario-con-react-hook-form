export const TextInput = ({label, id, type , placeholder, styleContainer, styleLabel,styleInput, styleParagraph, isError, errorMessage = "", ...rest}) => {
  return (
    <div className={`w-full flex flex-col gap-1 ${styleContainer}`}>

      <label htmlFor={id} className={`text-Grey-900-darker flex gap-2 ${styleLabel}`}>
        {label} 
        <span className="text-Green-600-medium">*</span>
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...rest}
        className={`border border-Grey-500-medium rounded-lg h-11 px-4 text-base focus:border-none focus:outline-1 focus:outline-Green-600-medium hover:border-none hover:outline-1 hover:outline-Green-600-medium ${styleInput}`}
      />

      {
        isError && (
          <p className={`text-Red ${styleParagraph}`}>{errorMessage}</p>
        )
      }
      
    </div>
  )
}
