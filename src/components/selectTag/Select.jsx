import { OptionTag } from "./OptionTag"

export const Select = ({label, id, ...rest}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-Grey-900-darker flex gap-2">
        {label}
        <span className="text-Green-600-medium">*</span>
      </label>

      <select
        id={id}
        {...rest}
        defaultValue="1"
        className="text-Grey-900-darker border border-Grey-500-medium rounded-lg h-11 px-4 text-base focus:border-none focus:outline-1 focus:outline-Green-600-medium hover:border-none hover:outline-1 hover:outline-Green-600-medium"
      >
        <OptionTag
          value="1"
          selected="selected"
          disabled="disabled"
          text="-- Select your country --"
        />
        <OptionTag value="Argentina" text="Argentina" />
        <OptionTag value="Bolivia" text="Bolivia" />
        <OptionTag value="Brazil" text="Brazil" />
        <OptionTag value="Chile" text="Chile" />
        <OptionTag value="Colombia" text="Colombia" />
        <OptionTag value="Ecuador" text="Ecuador" />
        <OptionTag value="Peru" text="Peru" />
        <OptionTag value="Uruguay" text="Uruguay" />
        <OptionTag value="Venezuela" text="Venezuela" />
      </select>
    </div>
  )
}
