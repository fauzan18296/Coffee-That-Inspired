import { ArrowDown } from 'react-feather'
import Button from './Button'

const ContactSection = () => {
  const sendMessageViaEmail = () => {
    const yourEmail = 'fauzan1829@gmail.com'
    return window.location.href= `mailto:${yourEmail}`
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-full flex-col">
      <h1 className="mx-5 text-2xl mb-1">If you have question about our <span className="text-primary font-Poppins text-2xl font-bold animate__animated animate__flash animae__slower">coffee products</span> you can send your message in via email! </h1>
      <span><ArrowDown size={38} className="text-primary animate__animated animate__shakeY animate__slow" /></span>
      <Button classname="bg-primary w-40 text-white text-xl font-semibold mt-3 py-2 rounded-lg  animate__animated animate__rubberBand" onClick={sendMessageViaEmail} type='button'>Send message</Button>
    </div>
  )
}

export default ContactSection
