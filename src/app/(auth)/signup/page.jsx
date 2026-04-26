'use client'

import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
    <div>
      <h2>Register Form</h2>
      <div className="min-h-80 border flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name:</label>
          <br />
          <input type="text" placeholder="Enter your name" {...register('name',{
            required:'Name must be required.',
            minLength:{
                value:5,
                message:'Minimum 5 character '
            }
          })} />
          {errors.name&&<p className="text-red-500">{errors.name.message}</p>}
          <br />
          <br />

          <label>Email:</label>
          <br />
          <input type="email" placeholder="Enter your email" {...register("email",{
            required:"Email must be required",
            pattern:{
                value:"/^[^\s@]+@[^\s@]+\.[^\s@]+$/",
                message:'Write correct email'
            }
          })} />
          {errors.email&&<p className="text-red-500">{errors.email.message}</p>}
          <br />
          <br />

          <label>Password:</label>
          <br />
          <input type="password" name="password" placeholder="Enter password" />
          <br />
          <br />

          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <br />
          <br />

          <label>Age:</label>
          <br />
          <input type="number" name="age" />
          <br />
          <br />

          <label>Gender:</label>
          <br />
          <select name="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <br />

          <input type="checkbox" name="terms" />
          <label>I accept terms and conditions</label>
          <br />
          <br />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
