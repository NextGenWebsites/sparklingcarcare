import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Replace these with your actual Email.js credentials
    const serviceId = "service_h5nm6us";
    const templateId = "template_rwj8y3o";
    const publicKey = "nZf_MUQp8PdIr3djs"; // You need to add your public key here

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitted(true);
        setLoading(false);

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            vehicleType: "",
            service: "",
            message: "",
            preferredDate: "",
            preferredTime: "",
          });
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setError(
          "Failed to send your request. Please try again or contact us directly."
        );
        setLoading(false);
      });
  };

  const services = [
    "Exterior Detailing",
    "Interior Detailing",
    "Paint Correction",
    "Minor Dent removal ",
    "Headlight restoration",
    "Engine bay wash",
    "Odour Removal",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-white py-16 font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl xl:text-7xl font-bold text-center mb-16 text-blue-600 mt-20"
          >
            Get in <span className="text-gray-600">Touch</span>
          </motion.h1>

          <div className="bg-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Image */}
              <motion.div
                variants={itemVariants}
                className="w-full md:w-5/12 relative"
              >
                <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Sparkling Car Care
                  </h3>
                  <div className="space-y-4 text-xl">
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p> 77/81 Reserve Rd, Artarmon NSW 2064</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p> (02) 9438 4988</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p>sparklingcarcare1@gmail.com </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p>Mon-Fri: 10AM - 6PM, Sat: 10AM - 3PM</p>
                    </div>
                  </div>

                  <div className="mt-8 flex space-x-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61574501624415 "
                      target="_blank"
                      className="h-10 w-10 rounded-full bg-white/20 hover:bg-blue-600 flex items-center justify-center transition duration-300"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/sparklingcarcare_/ "
                      target="_blank"
                      className="h-10 w-10 rounded-full bg-white/20 hover:bg-blue-600 flex items-center justify-center transition duration-300"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@sparklingcarcare_ "
                      target="_blank"
                      className="h-10 w-10 rounded-full bg-white/20 hover:bg-blue-600 flex items-center justify-center transition duration-300"
                    >
                      <span className="sr-only">TikTok</span>
                      <FaTiktok />
                    </a>
                  </div>
                </div>
                <img
                  src="https://carcarereviews.net/wp-content/uploads/2020/12/importance-of-car-detailing.jpg"
                  alt="Luxury car detailing"
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                variants={itemVariants}
                className="w-full md:w-7/12 p-8 md:p-12 bg-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-200 mb-6">
                  Schedule Your Detail
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 p-6 rounded-xl border border-green-200 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      We've received your request and will contact you shortly
                      to confirm your appointment.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        variants={itemVariants}
                        className="relative group"
                      >
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="peer w-full border-b-2 border-gray-300 text-gray-100 focus:outline-none focus:border-blue-600 focus:ring-0 placeholder-transparent h-10 bg-transparent"
                          placeholder="Full Name"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                          Full Name
                        </label>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="relative group"
                      >
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="peer w-full border-b-2 border-gray-300 text-gray-100 focus:outline-none focus:border-blue-600 focus:ring-0 placeholder-transparent h-10 bg-transparent"
                          placeholder="Email Address"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                          Email Address
                        </label>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        variants={itemVariants}
                        className="relative group"
                      >
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="peer w-full border-b-2 border-gray-300 text-gray-100 focus:outline-none focus:border-blue-600 focus:ring-0 placeholder-transparent h-10 bg-transparent"
                          placeholder="Phone Number"
                        />
                        <label
                          htmlFor="phone"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                          Phone Number
                        </label>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="relative group"
                      >
                        <input
                          type="text"
                          id="vehicleType"
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleChange}
                          className="peer w-full border-b-2  border-gray-300 text-gray-100 focus:outline-none focus:border-blue-600 focus:ring-0 placeholder-transparent h-10 bg-transparent"
                          placeholder="Vehicle Make/Model"
                        />
                        <label
                          htmlFor="vehicleType"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                          Vehicle Make/Model
                        </label>
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="relative">
                      <label
                        htmlFor="service"
                        className="text-sm text-gray-400 mb-1 block"
                      >
                        Service Requested
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 border-2 border-gray-300 rounded-lg bg-white px-3 text-gray-900 appearance-none focus:outline-none focus:border-blue-600"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                        <svg
                          className="fill-current h-4 w-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants} className="relative">
                        <label
                          htmlFor="preferredDate"
                          className="text-sm text-gray-400 mb-1 block"
                        >
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full h-10 border-2 border-gray-300 rounded-lg bg-white px-3 text-gray-900 appearance-none focus:outline-none focus:border-blue-600"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="relative">
                        <label
                          htmlFor="preferredTime"
                          className="text-sm text-gray-400 mb-1 block"
                        >
                          Preferred Time
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full h-10 border-2 border-gray-300 rounded-lg bg-white px-3 text-gray-900 appearance-none focus:outline-none focus:border-blue-600"
                        >
                          <option value="">Select a time</option>
                          <option value="Morning (10AM-12PM)">
                            Morning (10AM-12PM)
                          </option>
                          <option value="Midday (12PM-2PM)">
                            Midday (12PM-2PM)
                          </option>
                          <option value="Afternoon (2PM-4PM)">
                            Afternoon (2PM-4PM)
                          </option>
                          <option value="Evening (4PM-6PM)">
                            Evening (4PM-6PM)
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                          <svg
                            className="fill-current h-4 w-4 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      variants={itemVariants}
                      className="relative group"
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="peer w-full border-2 border-gray-300 rounded-lg text-gray-100 focus:outline-none focus:border-blue-600 focus:ring-0 placeholder-transparent p-3 resize-none"
                        placeholder="Additional Information"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-3 -top-3 text-gray-600 text-sm  px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Additional Information
                      </label>
                    </motion.div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm bg-red-100 p-3 rounded-lg"
                      >
                        {error}
                      </motion.div>
                    )}

                    <motion.button
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 disabled:bg-blue-400"
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <>
                          <span>Schedule Appointment</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h2 className="text-5xl  text-gray-600 mb-8">Find Us</h2>

            <div className="bg-white rounded-xl shadow-lg h-64 overflow-hidden">
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4130.627978734494!2d151.1870256!3d-33.8158916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aed8a0f7fcb9%3A0x75b682048520f614!2sSparkling%20Car%20Care!5e0!3m2!1sen!2slk!4v1743506974028!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
