import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

/*
npm install react-hook-form yup
npm install @hookform/resolvers
*/
export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Please enter fullname"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log("Form Submitted");
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder="FullName..." {...register("fullName")} /><br/>
            {errors.fullName&&<p className="errors">{errors.fullName.message}</p>}
            <input type='text' placeholder="Email..." {...register("email")} /><br/>
            {errors.email&&<p className="errors">{errors.email.message}</p>}
            <input type='number' placeholder="Age..." {...register("age")} /><br/>
            {errors.age&&<p className="errors">{errors.age.message}</p>}
            <input type='text' placeholder="Password..." {...register("password")} /><br/>
            {errors.password&&<p className="errors">{errors.password.message}</p>}
            <input type='text' placeholder="Confirm Password..." {...register("confirmPassword")} /><br/>
            {errors.confirmPassword&&<p className="errors">{errors.confirmPassword.message}</p>}
            <input type='submit'  />
        </form>
    );
}