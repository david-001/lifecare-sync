const Input = (props) => {
  const {
    label,
    label_txt,
    type,
    id,
    name,
    placeholder,
    value,
    accept,
    onChange,
  } = props;

  let element;
  if (
    type === "text" ||
    type === "number" ||
    type === "email" ||
    type === "password"
  ) {
    element = (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 shadow p-2 w-full"
      />
    );
  } else if (type === "textarea") {
    element = (
      <textarea
        className="border border-gray-300 shadow p-2 w-full"
        style={{ resize: "none" }}
        id={id}
        name={name}
        placeholder={placeholder}
        rows="2"
        value={value}
        onChange={onChange}
      />
    );
  } else if (type === "file") {
    element = (
      <input
        className="border border-gray-300 shadow w-full file:bg-blue-500 file:text-white file:font-bold file:py-2 file:px-4"
        type={type}
        onChange={onChange}
      />
    );
  }

  return (
    <div className="mb-3">
      <label htmlFor={label} className="block mb-2 font-bold text-gray-600">
        {label_txt}
      </label>
      {element}
    </div>
  );
};
export default Input;
