import { z, create } from 'zod';
import { useForm } from 'react-zod';

// Crie um esquema de validação usando Zod
const schema = z.object({
  name: z.string(),
  age: z.number().min(18),
  email: z.string().email(),
});

// Crie um formulário usando react-zod
const MyForm = () => {
  const { data, handleSubmit, handleChange } = useForm({
    schema,
    defaultValues: { name: '', age: 0, email: '' },
    onSubmit: (values) => {
      // Faça algo com os valores validados
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={data.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={data.age} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={data.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
