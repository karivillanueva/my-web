import { ContactFormInputs } from '../components/contact/utils';
import { api } from './client';

export const sendContactEmail = async (formData: ContactFormInputs) => {
  try {
    const response = await api.post('/sendEmail', formData);
    return response.data;
  } catch (error) {
    console.error('Error sending email via API:', error);
    throw error;
  }
};
