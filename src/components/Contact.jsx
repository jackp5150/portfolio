import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { SocialIcon } from "react-social-icons";


// DwRTvGVxiPDzNwBSo
// service_k7ugsxg
// service_k7ugsxg

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_k7ugsxg",
    "template_z944syj",
    {
      from_name: form.name,
      to_name: 'Jack',
      from_email: form.email,
      to_email: 'jackp5150@gmail.com',
      message: form.message
    },
      "DwRTvGVxiPDzNwBSo"
    )
    .then(() => {
      setLoading(false)
      alert('Thank you I will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: '',
      }), (error) => {
        setLoading(false)
        console.log(error);
        alert('Something went wrong')
      }
    })
  }


  return (
    <div className='xl:mt-12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2x1"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>

        <h3 className={styles.sectionHeadText}> Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6
            placeholder:text-secondary text-white
            rounded-lg outlined-nome
            border-none font-medium
            '/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your Email?"
            className='bg-tertiary py-4 px-6
            placeholder:text-secondary text-white
            rounded-lg outlined-nome
            border-none font-medium
            '/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className='bg-tertiary py-4 px-6
            placeholder:text-secondary text-white
            rounded-lg outlined-nome
            border-none font-medium
            '/>
          </label>

          <button
          type="submit"
          className='bg-tertiary py-3 px-8
          outline-none w-fit text-white font-bold shadow-md
          shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}

          </button>

          </form>
      </motion.div>

      <motion.div variants={slideIn("left", "tween", 0.2, 1)} style={{ position: "absolute", left: "-1%", top: "15%", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <a href="https://www.linkedin.com/in/jack-perkins-627976162/" target="_blank" rel="noopener noreferrer">
        <SocialIcon
          url="https://www.linkedin.com/in/jack-perkins-627976162/"
          style={{ height: 50, width: 50, margin: "10px 0" }}
        />
      </a>
      <a href="https://github.com/jackp5150" target="_blank" rel="noopener noreferrer">
        <SocialIcon
          url="https://github.com/jackp5150"
          style={{ height: 50, width: 50, margin: "10px 0" }}
        />
      </a>
      <a href="https://www.instagram.com/jack_p_erkin_s/?hl=en" target="_blank" rel="noopener noreferrer">
        <SocialIcon
          url="https://www.instagram.com/jack_p_erkin_s/?hl=en"
          style={{ height: 50, width: 50, margin: "10px 0" }}
        />
      </a>
      </motion.div>


      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px}"
      >

        <EarthCanvas/>

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")