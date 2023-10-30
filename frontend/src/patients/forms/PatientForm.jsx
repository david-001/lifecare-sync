import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";

const PatientForm = (props) => {
  const { patient, handleSubmit, handleOnChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="first_name"
        label_txt="First Name"
        type="text"
        id="first_name"
        name="first_name"
        placeholder="Enter First Name"
        value={patient.first_name}
        onChange={handleOnChange}
      />
      <Input
        label="last_name"
        label_txt="Last Name"
        type="text"
        id="last_name"
        name="last_name"
        placeholder="Enter Last Name"
        value={patient.last_name}
        onChange={handleOnChange}
      />
      <Input
        label="age"
        label_txt="Age"
        type="number"
        id="age"
        name="age"
        placeholder="Enter age"
        value={patient.age}
        onChange={handleOnChange}
      />
      <Input
        label="contact"
        label_txt="Contact Tel."
        type="text"
        id="contact"
        name="contact"
        placeholder="Enter telephone number"
        value={patient.contact}
        onChange={handleOnChange}
      />
      <Input
        label="emergency_contact"
        label_txt="Emergency Contact Tel."
        type="text"
        id="emergency_contact"
        name="emergency_contact"
        placeholder="Enter telephone number"
        value={patient.emergency_contact}
        onChange={handleOnChange}
      />
      <Input
        label="pre_existing_conditions"
        label_txt="Pre-existing Conditions"
        type="textarea"
        id="pre_existing_conditions"
        name="pre_existing_conditions"
        placeholder="Enter Pre-existing conditions"
        value={patient.pre_existing_conditions}
        onChange={handleOnChange}
      />
      <Input
        label="symptoms"
        label_txt="Symptoms"
        type="textarea"
        id="symptoms"
        name="symptoms"
        placeholder="Enter Symptoms"
        value={patient.symptoms}
        onChange={handleOnChange}
      />
      <Input
        label="diagnosis"
        label_txt="Diagnosis"
        type="textarea"
        id="diagnosis"
        name="diagnosis"
        placeholder="Enter Diagnosis"
        value={patient.diagnosis}
        onChange={handleOnChange}
      />
      <Input
        label="treatment"
        label_txt="Treatment"
        type="textarea"
        id="treatment"
        name="treatment"
        placeholder="Enter Treatment"
        value={patient.treatment}
        onChange={handleOnChange}
      />
      <Input
        label="medication"
        label_txt="Medication"
        type="textarea"
        id="medication"
        name="medication"
        placeholder="Enter Medication"
        value={patient.medication}
        onChange={handleOnChange}
      />
      <Input
        label="comments"
        label_txt="Comments"
        type="textarea"
        id="comments"
        name="comments"
        placeholder="Enter Comments"
        value={patient.comments}
        onChange={handleOnChange}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default PatientForm;
