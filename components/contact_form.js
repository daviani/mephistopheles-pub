import { useState, useReducer } from 'react'
import emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'
import Link from 'next/link'
import { useRouter } from 'next/router'
import i18n from '../lib/i18n'
import {FaCheckCircle} from 'react-icons/fa'
import Loading from './contact_loading'

const initialState = {
  name: '',
  email: '',
  message: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value }
    case 'email':
      return { ...state, email: action.value }
    case 'message':
      return { ...state, message: action.value }
    default:
      throw new Error()
  }
}

const ContactForm = () => {
  const { locale } = useRouter()
  const [formState, dispatch] = useReducer(reducer, initialState)
  const [showFormErrors, setShowFormErrors] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '', sendingState: 'before' })
  const [showCaptcha, setShowCaptcha] = useState(false)
  const { name, email, message } = formState

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault()
    setShowCaptcha(true)
  }

  const sendEmail = (captchaValue) => {
    if (name === '' || email === '' || message === '') {
      setShowFormErrors(true)
    }
    const params = {
      ...formState,
      'g-recaptcha-response': captchaValue,
    }

    setFormSubmitted({
      title: i18n.contact.form_data_sending_message_title[locale],
      paragraph: '',
      sendingState: 'loading'
    })

    emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        params,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER
      )
      .then(({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: i18n.contact.form_data_success_title[locale],
              paragraph: i18n.contact.form_data_success_paragraph[locale],
              sendingState: 'success'
            })
          } else {
            setFormSubmitted({
              title: i18n.contact.form_data_error_message_title[locale],
              paragraph: i18n.contact.form_data_error_message_paragraph[locale],
              sendingState: 'error'
            })
          }
        }, (error) => {
          console.error(error)
          setFormSubmitted({
            title: i18n.contact.form_data_error_message_title[locale],
            paragraph: i18n.contact.form_data_error_message_title[locale],
            sendingState: 'error'
          })
        }
      )
  }
  return (
    <>
      <div className='text-center text-yellow-500 mt-4 mb-8 text-5xl pt-6 px-6 bastille h-30'>
        {i18n.contact.title[locale]}
      </div>

      {formSubmitted.sendingState === 'before' &&
      <div className='h-auto m-4'>
        {!showCaptcha ? (
          <form onSubmit={submitFormAndShowCaptcha}
                className=' w-full p-4'
          >
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block tracking-wide  text-xs font-bold mb-2'>
                  {i18n.contact.form_name[locale]}
                </label> <input
                className='appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                type='text'
                value={name}
                required
              />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block tracking-wide  text-xs font-bold mb-2'>
                  {i18n.contact.form_email[locale]}
                </label> <input
                className='appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                type='email'
                value={email}
                required
              />
              </div>
            </div>
            <div className='w-full'>
              <label className='block tracking-wide text-xs font-bold mb-2'
                     htmlFor='grid-password'
              >
                {i18n.contact.form_message[locale]}
              </label>
              <textarea
                className='block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-l py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                rows='6'
                value={message}
                onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                required
              />
            </div>

            <p className='text-xs'>
              {i18n.contact.rgpd[locale]}
            </p>

            {showFormErrors ? (
              <p className='sm:mr-4 text-center text-red-400 m-3'>
                {i18n.contact.form_data_error_html[locale]}
              </p>
            ) : (
              <div className='flex justify-center'>
                <button
                  className='shadow bg-yellow-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-3'
                  type='submit'
                >
                  {i18n.contact.form_send[locale]}
                </button>
              </div>
            )}
          </form>
        ) : (
          <div className='flex justify-center mt-4'>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={sendEmail}
            />
          </div>
        )}
      </div>
      }

      {formSubmitted.sendingState === 'loading' &&
      <div className='h-40 m-4'>
        <p className='mt-2 text-center'>
          {i18n.contact.form_data_loading[locale]}
        </p>
        <div
          className='text-yellow-500 opacity-75 mt-2 flex justify-center'
        >
          <Loading />
        </div>
      </div>
      }

      {formSubmitted.sendingState === 'success' &&
      <div className='h-60'>
        <p className='mt-2 text-center'>
          {formSubmitted.title}
        </p>
        <p className='mt-2 text-center'>
          {formSubmitted.paragraph}
        </p>
        <div
          className='text-green-500 opacity-75 mt-4 flex justify-center'
        >
          <FaCheckCircle className='text-green-500 opacity-75 mt-4 flex justify-center' />
        </div>
        <div className='mt-4 flex justify-center'>
          <Link href='/'
                passHref
          >
            <button
              className='shadow bg-yellow-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-3'
              type='submit'
            >
              {i18n.contact.form_data_end[locale]}
            </button>
          </Link>
        </div>
      </div>
      } {formSubmitted.sendingState === 'error' &&
    <div className='h-60 m-4'>
      <p className='mt-2 text-center'>
        {formSubmitted.title}
      </p>
      <p className='mt-2 text-center'>
        {formSubmitted.paragraph}
      </p>
      <div
        className='text-red-500 opacity-75 mt-4 flex justify-center'
      >

        <Loading />
      </div>
      <div className='mt-4 flex justify-center'>
        <Link href='/'
              passHref
        >
          <button
            className='shadow bg-yellow-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-3'
            type='submit'
          >
            {i18n.contact.end[locale]}
          </button>
        </Link>
      </div>
    </div>
    }
    </>
  )
}

export default ContactForm