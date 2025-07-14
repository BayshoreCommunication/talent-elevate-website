"use client";

import { send } from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";

interface ContactFormState {
  fullName: string;
  lastName: string;
  phone: string;
  zipCode: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  lastName?: string;
  phone?: string;
  zipCode?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [emailForm, setEmailForm] = useState<ContactFormState>({
    fullName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.zipCode) {
      errors.zipCode = "Zip code is required!";
    }
    if (!values.subject) {
      errors.subject = "Subject is required!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const errors = validate(emailForm);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      send(
        "service_wj7yeey",
        "template_u74l3rr",
        emailForm as unknown as Record<string, unknown>,
        "2kczyCyop9k9pMsa-"
      )
        .then((response) => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              fullName: "",
              lastName: "",
              phone: "",
              zipCode: "",
              email: "",
              subject: "",
              message: "",
            });
          });
        })
        .catch((err) => {
          console.log("err", err);
          Swal.fire({
            icon: "error",
            text: "Something went wrong!",
          }).then(() => {
            setEmailForm({
              fullName: "",
              lastName: "",
              phone: "",
              zipCode: "",
              email: "",
              subject: "",
              message: "",
            });
            setLoading(false);
          });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-5 w-full flex flex-col md:flex-row gap-5">
          {/* First Name */}
          <div className=" w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="First Name"
              required
              type="text"
              name="fullName"
              value={emailForm.fullName}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  fullName: event.target.value,
                });
              }}
            />
            <span className="text-red-500">{formErrors.fullName}</span>
          </div>
          {/* Last Name */}
          <div className=" w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="Last Name"
              required
              type="text"
              name="lastName"
              value={emailForm.lastName}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  lastName: event.target.value,
                });
              }}
            />
            <span className="text-red-500">{formErrors.lastName}</span>
          </div>
        </div>
        <div className="mb-5 w-full flex flex-col md:flex-row gap-5">
          {/* Phone Number */}
          <div className="w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="Phone Number"
              required
              type="text"
              name="phone"
              value={emailForm.phone}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  phone: event.target.value,
                });
              }}
            />
            <span className="text-red-500">{formErrors.phone}</span>
          </div>
          {/* Zip Code */}
          <div className=" w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="Zip Code"
              required
              type="text"
              name="zipCode"
              value={emailForm.zipCode}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  zipCode: event.target.value,
                });
              }}
            />
            <span className="text-red-500">{formErrors.zipCode}</span>
          </div>
        </div>
        <div className="mb-5 w-full flex flex-col md:flex-row gap-5">
          {/* Email */}
          <div className="w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="Email"
              required
              type="email"
              name="email"
              value={emailForm.email}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  email: event.target.value,
                });
              }}
            />
            <span className="text-red-500">{formErrors.email}</span>
          </div>
          {/* Subject */}
          <div className="w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="Subject"
              required
              type="text"
              name="subject"
              value={emailForm.subject}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  subject: event.target.value,
                });
              }}
            />
            <span className="text-red-500">{formErrors.subject}</span>
          </div>
        </div>
        {/* Text Area */}
        <div className="mb-5">
          <textarea
            rows={4}
            id="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
            placeholder="Please describe what happened"
            required
            name="message"
            value={emailForm.message}
            onChange={(event) => {
              setEmailForm({
                ...emailForm,
                message: event.target.value,
              });
            }}
          />
          <span className="text-red-500">{formErrors.message}</span>
        </div>
        {loading ? (
          <button
            type="submit"
            className="bg-[#241836] text-white px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] active:scale-95 shadow-sm hover:shadow-md"
            disabled
          >
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            Sending...
          </button>
        ) : (
          <button
            type="submit"
            className="bg-[#241836] text-white px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] active:scale-95 shadow-sm hover:shadow-md"
          >
            <div className=" flex items-center justify-center">
              <p className="text-xl">Send Message</p>
            </div>
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
