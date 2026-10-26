import React from 'react'
import { BiEnvelope, BiMap,} from 'react-icons/bi'
import { FaEnvelopeOpen, FaFacebook, FaLinkedin} from 'react-icons/fa'


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const subject = String(formData.get('subject'))
    const message = String(formData.get('message'))
    const body = `${message}`
    const mailtoUrl =
      `mailto:gomis396@gmail.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

const Contact = () => {
  return (
    <div id="contact" className='pt-16 pb-16'>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
          {/*Caixa de contactos */}
          <div>
            <h1 className='text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-200'>
              These are my contacts and ways to reach to me: 
            </h1>
            <div className='mt-7'>
              <div className='flex items-center space-x-3 mb-4'>
                <BiEnvelope className='w-9 h-9 text-cyan-300'/>
                <p className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                  gomis396@gmail.com
                </p>
              </div> 
              <div className='flex items-center space-x-3 mb-4'>
                <BiMap className='w-9 h-9 text-cyan-300'/>
                <p className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                  Vila de Prado, Braga
                </p>
              </div>
            </div>
            {/* redes sociais */}
          <div className='flex items-center mt-8 space-x-3'>
            <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-blue-800 transition-all duration-300'>
            <FaFacebook className='w-6 h-6 text-white' />
          </div>
          <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-blue-800 transition-all duration-300'>
            <FaEnvelopeOpen className='w-6 h-6 text-white' />
          </div>
          <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-blue-800 transition-all duration-300'>
            <FaLinkedin className='w-6 h-6 text-white' />
          </div>
        </div>
      </div>
      {/* Caixa para envio de mensagem */}
      <div className="md:p-10 p-5 bg-[#131332] rounded-lg">
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Content Subject' 
            name="subject"
            required 
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            required
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'>
          </textarea>
        
          <button type="submit" className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transistion-all duration-300 cursor-pointer text-white rounded-full'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
)
}

export default Contact