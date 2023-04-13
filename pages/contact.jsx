import Head from 'next/head'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import Aside from '../components/aside'
import PageName from '../components/pageName'

function Contact() {
  // Initialize our states
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Yup error message overrides
  const errMess = {
    req: "Por favor, preencha aqui!"
  };

  // Our Yup Schema for this form
  const ContactSchema = yup.object().shape({
    name: yup.string()
      .label('Nome Completo')
      .required(errMess.req)
      .min(3)
      .max(30),
    email: yup.string()
      .label('Endereço de Email')
      .required(errMess.req)
      .email('Endereço de email inválido.'),
    phone: yup.string()
      .label('Telefone de Contato')    
      .max(12),
    message: yup.string()
      .label('Mensagem')
      .required(errMess.req)
      .min(10)
      .max(1000),
  });

  // Destruct useForm() and set our Yup schema as the validation resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema)
  });

  // Send our valid form data to our back-end API
  const submitForm = async (data) => {
    setIsSubmitting(true);

    const res = await axios({
      method: 'POST',
      url: '/api/contact-form',
      data: data
    }).then((res) => {
      setIsSubmitting(false);
      return res;
    }).catch((e) => {
      alert("Um erro ocorreu. Consulte o registro para obter detalhes.")
      console.error(e);
    });

    if (res.data.status === 1) {
      setIsSubmitted(true);
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="flex flex-row min-h-screen overflow-hidden">
    <Head>
        <title>Contact | Gusthavo Ramos</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Aside />  
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-5'>
        <PageName name="Contact" />
        <div className='relative flex items-top justify-center min-h-screen  sm:items-center sm:pt-0'>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <div className='w-full justify-center' ><img src="/img/contact.png" className='w-full object-contain	 h-40		' /></div>
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Entrar em contato
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Preencha o formulário ao lado
                </p>
                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>                
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                Rua Manuel Gaya, Vila Mazzei, São Paulo-SP,
                    02313-001
                </div>
                </div>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      011 98273-5663
                  </div>
                </div>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40 break-all sm:break-normal">
                        gusthavo.rmiguel@gmail.com
                    </div>
                </div>               
              </div>

              {!isSubmitted ?
              <>                        
              <Form
               onSubmit={handleSubmit((data) => submitForm(data))} 
               className="p-6 flex flex-col justify-center">
                  <Row className='flex flex-col'>
                    <Col className='pt-5'>
                      <Form.Group
                       className="mb-3" 
                       controlId="nameField">
                      <Form.Label className='hidden'>Nome Completo</Form.Label>
                      <Form.Control 
                       className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                       type="text"
                       placeholder="Nome Completo"
                       isInvalid={errors.name}
                       {...register('name')}
                      />
                    <Form.Control.Feedback type='invalid'>
                      {errors.name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                    </Col> 

                    <Col>
                      <Form.Group className="mb-3" controlId="emailField">
                        <Form.Label className='hidden'>Email</Form.Label>
                        <Form.Control 
                          className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          type="email"
                          placeholder="email@example.com"
                          isInvalid={errors.email}
                          {...register('email')}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col>
                      <Form.Group className="mb-3" controlId="phoneField">
                        <Form.Label className='hidden'>Telefone</Form.Label>
                        <Form.Control 
                          className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          type="tel"
                          placeholder="(XX) 9XXXX-XXXX"
                          isInvalid={errors.phone}
                          {...register('phone')}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.phone?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col lg={12}>
                      <Form.Group className="mb-3" controlId="messageField">
                        <Form.Label className='hidden'>Message</Form.Label>
                        <Form.Control 
                          className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          as="textarea"
                          rows={5}
                          placeholder="Por favor escreva sua mensagem..."
                          isInvalid={errors.message}
                          {...register('message')}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.message?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                  </Row>
                  <Row className=' self-center'>
                  <Button variant="primary" type="submit" disabled={isSubmitting} className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </Button>
                  </Row>
                  
              </Form>
              </>
              :
              <div className='text-slate-200 font-semibold sm:pt-28'>
              <h1>Obrigado !</h1>
              <p> Sua mensagem foi recebida. Verifique seu email para confirmar! </p>
              </div>
              }





              
            </div>
           </div>
        </div>      
    </div>
  </div>
  )
}

export default Contact