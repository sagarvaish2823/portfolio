"use client";
import React, { Fragment } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Formik } from "formik";

const MakeWebsiteForm = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-center">
        <Formik className="">
          <div>
            <div className="flex gap-8">
              <Input
                type="text"
                label="Name"
                variant="bordered"
                labelPlacement="outside"
                size="lg"
                isClearable="true"
                className=""
              />
              <Input
                type="email"
                label="Email"
                variant="bordered"
                labelPlacement="outside"
                size="lg"
                isClearable="true"
              />
            </div>
            <Input
              type="text"
              label="Company Name"
              variant="bordered"
              labelPlacement="outside"
              size="lg"
              isClearable="true"
              className="pt-10"
            />
            <Input
              type="url"
              label="Website ( If Exist )"
              placeholder="example.com"
              variant="bordered"
              labelPlacement="outside"
              className="pt-4"
              size="lg"
              isClearable="true"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-small text-default-400">https://</span>
                </div>
              }
            />
            <Textarea
              label="Service You Need"
              variant="bordered"
              labelPlacement="outside"
              isClearable="true"
              placeholder="Enter your description"
              className="pt-4"
              size="lg"
            />
            <Input
              type="text"
              label="Budget"
              variant="bordered"
              labelPlacement="outside"
              size="lg"
              isClearable="true"
              className="pt-10"
            />
          </div>
        </Formik>
      </div>
    </Fragment>
  );
};

export default MakeWebsiteForm;
