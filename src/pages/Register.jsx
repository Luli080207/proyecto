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