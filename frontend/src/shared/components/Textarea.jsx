const Textarea = (props) => {
  const {
    label,
    label_txt,
    type,
    id,
    name,
    placeholder,
    value,
    children,
    onChange,
  } = props;

  return (
    <textarea className="border border-gray-300 shadow p-2 w-full"></textarea>
  );
};

export default Textarea;
