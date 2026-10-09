# Contact Form Email Setup

The contact form is now configured to send emails to the admin using SMTP. Follow these steps to set up the email functionality:

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin email to receive contact form submissions
ADMIN_EMAIL=admin@orianashippingbv.nl
```


```



### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Gmail App Password Setup

If using Gmail, you'll need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App passwords
5. Generate a new app password for "Mail"
6. Use this password in the `SMTP_PASS` variable

## Features

- ✅ Form validation with React Hook Form
- ✅ Email validation
- ✅ Required field validation
- ✅ Loading states during submission
- ✅ Success/error toast notifications
- ✅ Form reset after successful submission
- ✅ Professional HTML email template
- ✅ Responsive design

## API Endpoint

The contact form submits to `/api/contact` which:
- Validates required fields
- Sends email using nodemailer
- Returns appropriate success/error responses

## Testing

1. Fill out the contact form
2. Submit the form
3. Check your admin email for the submission
4. Verify toast notifications appear

The form will show loading state during submission and display success/error messages accordingly. 