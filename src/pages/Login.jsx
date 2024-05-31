import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

  return (
    <>
        <section className='heading'>
            <h4><FaSignInAlt/>Login</h4>
            <p>Por favor ingresa con tu email y constraseña.</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input 
                        type="text" 
                        className='form-control' 
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Direccion de correo'
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input 
                        type="password" 
                        className='form-control' 
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Contraseña'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Login</button>
                </div>
            </form>
        </section>
    </>
  )
}
export default Login
