# Olive Bootcamp Website

This is the landing page for the Olive Bootcamp, a 6-week program helping Palestinian entrepreneurs go from idea to MVP.

## Setup and Deployment

### Prerequisites
- Node.js and npm installed
- Formspree CLI (for form handling)

### Local Development
1. Clone this repository
2. Open `index.html` in your web browser to view the site locally

### Form Handling with Formspree
This site uses Formspree for handling form submissions. The form is configured directly in the HTML.

The form is set up with your Formspree form ID. Form submissions will be:
- Sent to the email address associated with this Formspree form
- Include the subject "New Olive Bootcamp Application"
- Redirect users to the thanks.html page after submission
- Protected from spam with a honeypot field

### Customizing the Form
To change the form configuration:

1. Log in to your Formspree account at https://formspree.io/
2. Navigate to your form
3. Update the settings as needed (email recipients, redirects, etc.)
4. If you need to use a different form ID, update it in the HTML form action

### Redirects
After form submission, users will be redirected to the `thanks.html` page as specified in the HTML form's `_next` field.

## Website Structure
- `/index.html` - Main landing page
- `/thanks.html` - Thank you page after form submission
- `/css/` - Stylesheet directory
- `/js/` - JavaScript directory
- `/images/` - Image assets

## Contact
For questions or updates, contact [george@olivestartups.org](mailto:george@olivestartups.org).