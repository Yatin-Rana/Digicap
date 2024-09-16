// app/contact/page.tsx
import React from 'react';
import { PrismaClient } from '@prisma/client';
import ContactForm from './ContactForm';

const prisma = new PrismaClient();

async function submitContact(formData: FormData) {
  'use server'

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        message,
      },
    });
    return { success: true, message: 'Thank you for your message. We\'ll be in touch soon!' };
  } catch (error) {
    console.error('Submission error:', error);
    return { success: false, message: 'An error occurred. Please try again later.' };
  }
}

export default function ContactUs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">Get in Touch</h1>
        <h2 className="text-xl font-medium text-center text-gray-600 mb-12">We&apos;d love to hear from you!</h2>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <ContactForm submitContact={submitContact} />
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Or Reach Us At:</h3>
          <p className="text-gray-600">Email: digicapmedia@gmail.com</p>
          <p className="text-gray-600 mb-4">
            Phone:
            <a href="tel:+917559781539" className="text-gray-600 ">+91 7559781539</a>,
            <a href="tel:+917807763447" className="text-gray-600 ">+91 7807763447</a>
          </p>

          <p className="text-gray-600">Address:Dharamshala, Himachal Pradesh</p>
        </div>
      </div>
    </section>
  );
}
