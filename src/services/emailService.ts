import { API_ROUTES } from '@/utils/constants';
import { ContactFormInputs } from '../components/contact/utils';
import { api } from './client';

export const sendContactEmail = async (formData: ContactFormInputs) => {
  try {
    const response = await api.post(API_ROUTES.SEND_EMAIL, formData);
    return response.data;
  } catch (error) {
    console.error('Error sending email via API:', error);
    throw error;
  }
};
