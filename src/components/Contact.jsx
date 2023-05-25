import { useState, useRef } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";

const Contact2 = () => {
  return(
    <div className="">
        <h1></h1>
        <h3></h3>
    </div>
  )
}

const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: '',
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4vh09gd',
      'template_q83hdxf',
      {
        from_name: form.name,
        to_name: 'Lavajet',
        from_email: form.email,
        to_email: 'admin@lavajet.net',
        message: form.message,
        phone: form.phone,
      },
      'zddYMNx2S7Aq7rF4G'
    ).then(() => {
      alert('Thank you. I will get back to you as soon as possible');

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      }, (error) => {
        console.log(error)
        alert('Something went wrong')
      } )

    })
  };

  return (
    <div id="contact" className="py-10 overflow-hidden">
      <Title
        colorT={"text-black-100"}
        colorL={"bg-[#d8d8d8]"}
        title={"Contact"}
      />
      <div className="w-[90%] md:w-[60%] my-[-75px] mx-auto py-10">
        <p className="text-[30px] text-black-100 pb-10 font-semibold">
          Generate your Schedule
        </p>
        <form
          ref={fromRef}
          onSubmit={handleSubmit}
          className="h-[500px] flex flex-col gap-5 "
        >
          <label className="w-[100%]">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="border border-black p-3 w-[100%] placeholder:text-black-100"
            />
          </label>
          <label className="w-[100%]">
            <input
              type="number"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-black p-3 text-black w-[100%] placeholder:text-black-100"
            />
          </label>
          <label className="w-[100%]">
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-black p-3 text-black w-[100%] placeholder:text-black-100"
            />
          </label>
          <label className="w-[100%]">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Declare your region, postal code and the start date of the cleaning"
              className="border border-black p-3 text-black w-[100%] placeholder:text-black-100 h-[200px] "
            />
          </label>
          <button
            type="submit"
            className="bg-black-100 text-white w-[100%] font-medium text-[18px] py-4 hover:bg-blue transition-all shadow-primary shadow-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

{
  /* 
<label className="w-[725px] pl-[10%]">
<input
  type="text"
  name="region"
  value={form.region}
  onChange={handleChange}
  placeholder="Region"
  className="border border-black p-2 w-[100%]"
/>
</label>
<label className="w-[725px] py-5 pl-[10%]">
<input
  type="text"
  name="street"
  value={form.street}
  onChange={handleChange}
  placeholder="Street"
  className="border border-black p-2 w-[100%]"
/>
</label>
<label className="w-[725px] pl-[10%]">
<input
  type="text"
  name="postal"
  value={form.postal}
  onChange={handleChange}
  placeholder="Postal Code"
  className="border border-black p-2 w-[100%]"
/>
</label>
<label className="w-[725px] py-5 pl-[10%]">
<input
  type="text"
  name="date"
  value={form.date}
  onChange={handleChange}
  placeholder="Start Date"
  className="border border-black p-2 w-[100%]"
/>
</label>
<button type="submit" className="bg-black-100 ml-5">
Send Form
</button> */
}
