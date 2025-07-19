import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    occupation: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // ✅ AOS INIT — sirf ye add kiya
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({});
    setSuccess("");
  };

  const validate = () => {
    const nameReg = /^[A-Z][a-zA-Z\s]{1,}$/;
    const emailReg = /^\S+@\S+\.\S+$/;
    const phoneReg = /^[6-9]\d{9}$/;
    const ageReg = /^\d{1,3}$/;
    const addressReg = /^[\w\s,'-]{5,}$/;
    const occupationReg = /^[A-Za-z\s]{2,}$/;

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!nameReg.test(formData.name)) {
      newErrors.name = "First letter capital, letters only";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailReg.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!phoneReg.test(formData.phone)) {
      newErrors.phone = "Invalid phone";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!ageReg.test(formData.age) || formData.age < 1) {
      newErrors.age = "Enter valid age";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    } else if (!addressReg.test(formData.address)) {
      newErrors.address = "Minimum 5 characters";
    }

    if (!formData.occupation) {
      newErrors.occupation = "Occupation is required";
    } else if (!occupationReg.test(formData.occupation)) {
      newErrors.occupation = "Letters only";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSuccess("Form submitted successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        occupation: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="form-container" data-aos="fade-up">
      <h2 data-aos="zoom-in">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {success && <p className="success">{success}</p>}

        <div className="form-group" data-aos="fade-right">
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group" data-aos="fade-left">
          <label>Email:</label>
          <input name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group" data-aos="fade-right">
          <label>Phone:</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group" data-aos="fade-left">
          <label>Age:</label>
          <input name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="form-group" data-aos="fade-right">
          <label>Address:</label>
          <input name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group" data-aos="fade-left">
          <label>Occupation:</label>
          <input
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          />
          {errors.occupation && <p className="error">{errors.occupation}</p>}
        </div>

        <div className="form-group" data-aos="fade-right">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group" data-aos="fade-left">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" data-aos="fade-down">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
