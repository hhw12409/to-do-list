import { useForm } from 'react-hook-form';

// const ToDoList = () => {
//   const [toDo, setToDo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//   const handleInputValue = (event: React.FormEvent<HTMLInputElement>) => {
//     setToDo(event.currentTarget.value);
//   };

//   const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError('To do should be longer');
//     } else {
//       return setToDoError('');
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input onChange={handleInputValue} value={toDo} placeholder="Write to do..." />
//         <button>Add</button>
//         <span>{toDoError !== '' ? toDoError : null}</span>
//       </form>
//     </div>
//   );
// };

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data: IForm) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
      >
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input {...register('firstName', { required: 'write here' })} placeholder="First Name" />
        <span>{errors?.firstName?.message}</span>
        <input {...register('lastName', { required: 'write here' })} placeholder="Last Name" />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('userName', { required: 'write here', minLength: 10 })}
          placeholder="User Name"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Your password is too short',
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', { required: 'write here', minLength: 5 })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
