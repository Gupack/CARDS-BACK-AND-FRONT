const validation = (userData, errors, setErrors) => {
  if (!userData.username)
    setErrors({ ...errors, username: "por favor completa este campo" })
  else if (userData.username.length > 35)
    setErrors({ ...errors, username: "No puede superar 35 caracteres" })
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)) {
    setErrors({ ...errors, username: "Error en el email" })


  } else {
    setErrors({ ...errors, username: "" })
  }

  if (!/^[A-Za-z]\w{6,10}$/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe incluir Mayusculas y Numeros" })
  } else {

    setErrors({ ...errors, password: "" })
  }
}
export default validation;