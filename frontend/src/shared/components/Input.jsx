const Input = (props) => {
  const { label, label_txt, type, id, name, placeholder, value, onChange } =
    props;
  return (
    <div className="mb-3">
      <label htmlFor={label} className="block mb-2 font-bold text-gray-600">
        {label_txt}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 shadow p-2 w-full"
      />
    </div>
  );
};
export default Input;
