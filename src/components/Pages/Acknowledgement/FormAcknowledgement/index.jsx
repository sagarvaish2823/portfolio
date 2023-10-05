"use client";
import { useFormik } from "formik";
import React, { Fragment } from "react";

const FormAcknowledgement = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      billingAddress: "",
      email: "",
      checkbox: "",
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}></form>
    </Fragment>
  );
};

export default FormAcknowledgement;
