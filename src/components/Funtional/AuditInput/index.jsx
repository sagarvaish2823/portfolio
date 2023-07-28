"use client";
import React, { Fragment, useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import SuccessAuditMessage from "../SuccessAuditMessage";

const AuditInput = () => {
  const [clicked, setClicked] = useState(false);

  const againAuditHandler = () => {
    setClicked(false);
  };
  const onSubmit = async (values) => {
    const { ...data } = values;
    await axios
      .post("/api/user", data)
      .then((response) => {
        if (response.status === 200) {
          formik.resetForm();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Please enter your name")
      .required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    address: yup
      .string()
      .min(10, "Minimum 10 characters required")
      .max(300, "Maximum 300 characters are allowed")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <p className="font-semibold sm-280:text-lg sm-280:leading-[2.5rem] sm-360:text-2xl sm-360:leading-[3.5rem] sm-390:text-3xl sm-390:leading-[3.5rem] sm-414:leading-[4rem] md-768:text-4xl md-768:leading-[5rem] md-820:text-[2.5rem] md-820:leading-[6rem] lg-1024:text-[3rem] lg-1024:leading-[6.5rem] lg-1366:text-[2.5rem] lg-1366:leading-[5rem]">
          My Name is{" "}
          <span>
            <input
              placeholder="Your Name"
              className="input_form"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </span>{" "}
          and I want{" "}
          <span>
            <input
              placeholder="Your Website"
              className="input_form"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </span>{" "}
          to be audited. You can reach me at{" "}
          <span>
            <input
              placeholder="Your Email"
              className="input_form"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </span>{" "}
          to send report.
        </p>
        <div className="">
          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3
            text-xl font-bold transition-transform hover:scale-105 active:scale-95 md-768:text-2xl lg-1024:px-8 lg-1024:py-5 lg-1024:text-3xl lg-1366:px-6 lg-1366:py-3"
          >
            Send
            <IoSend />
          </button>
        </div>
      </form>
      {!!clicked && <SuccessAuditMessage onClickAgain={againAuditHandler} />}
    </Fragment>
  );
};

export default AuditInput;
