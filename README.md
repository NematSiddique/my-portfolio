
# Portfolio Project

Welcome to my portfolio website! This is a personal website built using **Next.js** and **React** to showcase my work and skills as a **Full Stack Developer**.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, TypeScript
- **Backend**: Next.js API Routes (for email sending)
- **Email Service**: Resend API
- **Hosting**: Vercel

## Features

- **Responsive Design**: The portfolio is designed to be fully responsive on all screen sizes.
- **Email Sending**: A contact form is provided to send emails via the Resend API.
- **Dark Mode**: Built-in dark mode support using the `ThemeContext` and `ThemeSwitch` component.
- **Smooth Scrolling**: Scroll animations are implemented for a smooth experience.
- **Animation**: Framer Motion is used to add animations to components.

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/NematSiddique/my-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create an `.env.local` file in the root directory with the following content:

   ```env
   NEXT_PUBLIC_RESEND_API_KEY=your-api-key
   ```

   Replace `your-api-key` with your actual API key from Resend. You can sign up and get the API key from [Resend](https://resend.com/).

5. Start the development server:

   ```bash
   npm run dev
   ```

   Your project will be running at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Make sure to configure the following environment variable for email functionality:

- **NEXT_PUBLIC_RESEND_API_KEY**: Your Resend API key for sending emails from the contact form.

You can add these variables in **Vercel** or in your local `.env.local` file.

## Deployment

1. Push the code to your GitHub repository.
2. Link the repository to **Vercel**.
3. Configure the environment variables in the Vercel dashboard.
4. Vercel will automatically deploy the site on push and show it at the URL assigned to your project.

### Vercel Environment Variables:

- **NEXT_PUBLIC_RESEND_API_KEY**: Your Resend API key (same as in local).

