import { object, string, ref } from "yup";

export const signUpSchema = object().shape({
    email: string().required('Debe ingresar el e-Mail.').email('El e-Mail no es válido.'),
    password: string().required('Debe ingresar la contraseña.').min(6, 'La contraseña debe contener al menos 6 caracteres.'),
    confirmPassword: string().oneOf([ref('password'), null], 'Las contraseñas no coinciden.').required('Debe confirmar la contraseña.'),
})