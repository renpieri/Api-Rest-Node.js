import * as yup from 'yup'

//SHOW SCHEME
const usuarioScheme = yup.object({
    nombre: yup.string().required('El nombre es requerido').trim(),
    email: yup.string().email('Debes ingresar un email válido').required('El email es requerido').trim(),
    password: yup.string().min(6, 'La contraseña debe tener mas de 6 caracteres').max(16, 'La contraseña debe tener menos de 16 caracteres').required('La contraseña es requerida').trim(),
}).noUnknown()


export {
    usuarioScheme,
}