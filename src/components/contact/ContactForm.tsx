'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import TextInput from '../ui/TextInput';
import TextArea from '../ui/TextArea';
import InputWrapper from '../ui/InputWrapper';
import { ContactFormInputs, contactFormSchema } from './utils';
import { CALL_STATUS } from '@/utils/constants';
import Button from '../ui/Button';
import { sendContactEmail } from '@/services/emailService';

const ContactForm = () => {
  const [status, setStatus] = useState<CALL_STATUS | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setStatus(CALL_STATUS.LOADING);

    try {
      await sendContactEmail(data);
      setStatus(CALL_STATUS.SUCCESS);
      reset();
    } catch {
      setStatus(CALL_STATUS.ERROR);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <InputWrapper label="Name" error={errors.name} name="name">
        <TextInput name="name" register={register} error={errors.name} />
      </InputWrapper>

      <InputWrapper label="Email" error={errors.email} name="email">
        <TextInput
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />
      </InputWrapper>

      <InputWrapper label="Message" name="message" error={errors.message}>
        <TextArea name="message" register={register} error={errors.message} />
      </InputWrapper>

      <Button
        disabled={status === CALL_STATUS.LOADING}
        disableTitle="Sending..."
        title="Send Message"
      />

      {status === CALL_STATUS.SUCCESS && (
        <p className="text-green-600 text-center">Message sent successfully!</p>
      )}
      {status === CALL_STATUS.ERROR && (
        <p className="text-red-600 text-center">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
