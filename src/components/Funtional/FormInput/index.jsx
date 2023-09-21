"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { motion as m } from "framer-motion";
import SuccessAuditMessage from "../SuccessAuditMessage";
import axios from "axios";

const FormInput = () => {
  const [success, SetSuccess] = useState(null);
  const onSubmit = async (values, props) => {
    const { ...data } = values;
    await axios
      .post("api/user", data)
      .then((response) => {
        if (response.status === 200) {
          formik.resetForm();
          // SetSuccess(<SuccessAuditMessage />);
          props.setSubmitting(false);
        }
      })
      .catch((err) => {
        console.log(err);
        props.setSubmitting(false);
      });
    console.log(JSON.stringify(values));
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name should be longer than 2 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    company: yup
      .string()
      .min(3, "Company name should be longer than 2 characters"),
    website: yup
      .string()
      .min(3, "Company name should be longer than 2 characters"),
    budget: yup.number().integer().required("Budget is required"),
    message: yup
      .string()
      .min(10, "Minimum 10 characters required")
      .max(300, "Maximum 300 characters are allowed")
      .required("Message is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      company: "",
      website: "",
      budget: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <div className="flex items-center justify-start">
      {success}
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        {/* name field */}
        <m.label
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          htmlFor="name"
        >
          Name
        </m.label>
        <m.input
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          type="text"
          name="name"
          placeholder="Name"
          className="input_form"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></m.input>
        <span className="text-red-500">
          {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        </span>
        {/* email field */}
        <m.label
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          htmlFor="email"
        >
          Email
        </m.label>
        <m.input
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          type="email"
          name="email"
          placeholder="E-mail"
          className="input_form"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></m.input>
        <span className="text-red-500">
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : ""}
        </span>
        {/* company name field */}
        <m.label
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          htmlFor="company"
        >
          Company Name
        </m.label>
        <m.input
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          type="text"
          name="company"
          placeholder="Company"
          className="input_form"
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></m.input>
        <span className="text-red-500">
          {formik.touched.company && formik.errors.company
            ? formik.errors.company
            : ""}
        </span>
        {/* website field */}
        <m.label
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          htmlFor="company"
        >
          Website
        </m.label>
        <m.input
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          type="text"
          name="website"
          placeholder="example.com"
          className="input_form"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></m.input>
        <span className="text-red-500">
          {formik.touched.website && formik.errors.website
            ? formik.errors.website
            : ""}
        </span>
        {/* budget field */}
        <m.label
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          htmlFor="budget"
        >
          Budget
        </m.label>
        <m.input
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          type="number"
          name="budget"
          placeholder="₹"
          className="input_form"
          value={formik.values.budget}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></m.input>
        <span className="text-red-500">
          {formik.touched.budget && formik.errors.budget
            ? formik.errors.budget
            : ""}
        </span>
        {/* message field */}
        <m.label
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          htmlFor="message"
        >
          About Project
        </m.label>
        <m.textarea
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          type="text"
          name="message"
          placeholder="Tell me about your project"
          className="input_form"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></m.textarea>
        <span className="text-red-500">
          {formik.touched.message && formik.errors.message
            ? formik.errors.message
            : ""}
        </span>
        <m.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Button
            aria-label="Send"
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className="button_main mt-4 w-full bg-transparent"
          >
            Send
          </Button>
        </m.div>
      </form>
    </div>
  );
};

export default FormInput;
