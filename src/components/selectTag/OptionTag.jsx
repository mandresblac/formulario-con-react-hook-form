export const OptionTag = ({value, text, disabled}) => {
  return (
    <option
      value={value}
      disabled={disabled}
      className="text-base text-Grey-900-darker"
    >
      {text}
    </option>
  )
}

