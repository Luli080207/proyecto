import { useState } from "react"
import { Layout } from "../components/Layout"

const Register = ({setUser}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [succes, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
};

//validaciones
const validate = () => {
  let tempErrors = {};
  if (!formData.username.trim()) tempErrors.username = "Requerido";
  if (!formData.email.trim()) {
    tempErrors.email = "requerido";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    tempErrors.email = "formato de correo invalido";
  }
  if (formData.password.length < 6) {
    tempErrors.password = "La contraseña debe tener al menos 6 caracteres"
  }
  setErrors(tempErrors);
   return Object.keys(tempErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});
  setSuccess("")
}

if (!validate()) return;

try {
  const res = await fetch("https://fakestoreapi.com/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: formData.email,
      username: formData.username,
      password: formdata.password,
  })

});