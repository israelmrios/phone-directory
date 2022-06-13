import { useSate, useEffect } from 'react';

function Register() {
    const [formData, useFormData] = useEffect({
        email: "",
        password: "",
    })
  return (
    <div>Register</div>
  )
}

export default Register
