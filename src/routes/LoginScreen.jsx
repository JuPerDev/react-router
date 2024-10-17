import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { UserContext } from "../context/UserContext";

export const LoginScreen = () => {
  const initialForm = {
    userName: "",
    technology: "",
    mail: "",
    socialNetworks: "",
  };

  const { setUser } = useContext(UserContext);

  const {
    userName,
    technology,
    mail,
    socialNetworks,
    formValues,
    onInputChange,
  } = useForm(initialForm);

  const onSubmit = (e) => {
    e.preventDefault();
    setUser(formValues);
  };
  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label htmlFor='userName' className='form-label'>
            Nombre
          </label>
          <input
            type='text'
            className='form-control'
            id='userName'
            name='userName'
            value={userName}
            onChange={onInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='technology' className='form-label'>
            Tecnología
          </label>
          <input
            type='text'
            className='form-control'
            id='technology'
            value={technology}
            name='technology'
            onChange={onInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='mail' className='form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control'
            id='mail'
            name='mail'
            value={mail}
            onChange={onInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='socialNetwork' className='form-label'>
            Redes
          </label>
          <input
            type='text'
            className='form-control'
            id='socialNetwork'
            name='socialNetworks'
            value={socialNetworks}
            onChange={onInputChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Registrar Usuario
        </button>
      </form>
    </div>
  );
};
