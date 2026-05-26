// backend/controllers/formController.js
const nodemailer = require('nodemailer');

// Configure email transporter with better error detection
let transporter;

try {
  // Log environment variables (omitting sensitive info)
  console.log(`Configuring email: Service=${process.env.EMAIL_SERVICE}, User=${process.env.EMAIL_USER ? '✓ Set' : '✗ Not set'}, Pass=${process.env.EMAIL_PASSWORD ? '✓ Set' : '✗ Not set'}, Admin=${process.env.ADMIN_EMAIL ? '✓ Set' : '✗ Not set'}`);
  
  transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
  // Verify transporter configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.error('Email transporter verification failed:', error);
    } else {
      console.log('Email server is ready to send messages');
    }
  });
} catch (error) {
  console.error('Failed to create email transporter:', error);
}

/**
 * Handle Work With Us form submissions
 */
exports.handleWorkWithUsForm = async (req, res) => {
  try {
    console.log('Received Work With Us form submission:', JSON.stringify(req.body, null, 2).replace(/(email|password)/gi, '***'));
    
    // Check if transporter is configured
    if (!transporter) {
      console.error('Email transporter not configured properly');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: Email service not configured'
      });
    }

    const { name, email, skills, portfolio, bio } = req.body;
    
    // Validate required fields
    if (!name || !email || !skills || !bio) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }

    // Email content for admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Your email where you want to receive notifications
      subject: `New Job Application from ${name}`,
      html: `
        <h2>New Job Application Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Portfolio:</strong> ${portfolio || 'Not provided'}</p>
        <p><strong>Bio:</strong> ${bio}</p>
      `
    };

    // Email content for applicant confirmation
    const applicantMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your application!',
      html: `
        <h2>Application Received</h2>
        <p>Dear ${name},</p>
        <p>Thank you for submitting your application to work with us. We have received the following information:</p>
        <ul>
          <li><strong>Skills:</strong> ${skills}</li>
          <li><strong>Portfolio:</strong> ${portfolio || 'Not provided'}</li>
        </ul>
        <p>Our team will review your application and get back to you shortly.</p>
        <p>Best regards,<br/>The Team</p>
      `
    };

    console.log(`Attempting to send emails to ${process.env.ADMIN_EMAIL} and ${email}`);
    
    // Send admin notification email
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log('Admin notification email sent successfully:', adminInfo.response);

    // Send confirmation email to applicant
    const applicantInfo = await transporter.sendMail(applicantMailOptions);
    console.log('Applicant confirmation email sent successfully:', applicantInfo.response);

    // Send success response
    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully!' 
    });
    
  } catch (error) {
    console.error('Error handling Work With Us form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error: ' + (error.message || 'Unknown error')
    });
  }
};

/**
 * Handle Get Work Done form submissions
 */
exports.handleGetWorkDoneForm = async (req, res) => {
  try {
    console.log('Received Get Work Done form submission:', JSON.stringify(req.body, null, 2).replace(/(email|password)/gi, '***'));
    
    // Check if transporter is configured
    if (!transporter) {
      console.error('Email transporter not configured properly');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: Email service not configured'
      });
    }

    const { name, email, company, projectType, budget, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }

    // Email content for admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Project Request from ${name}`,
      html: `
        <h2>New Project Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };
    
    // Email content for client confirmation
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your project request!',
      html: `
        <h2>Project Request Received</h2>
        <p>Dear ${name},</p>
        <p>Thank you for submitting your project request. We have received the following details:</p>
        <ul>
          <li><strong>Project Type:</strong> ${projectType}</li>
          <li><strong>Company:</strong> ${company || 'Not provided'}</li>
          <li><strong>Budget:</strong> ${budget || 'Not provided'}</li>
        </ul>
        <p>Our team will review your project details and get back to you as soon as possible to discuss next steps.</p>
        <p>Best regards,<br/>The Team</p>
      `
    };

    console.log(`Attempting to send emails to ${process.env.ADMIN_EMAIL} and ${email}`);
    
    // Send admin notification email
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log('Admin notification email sent successfully:', adminInfo.response);
    
    // Send confirmation email to client
    const clientInfo = await transporter.sendMail(clientMailOptions);
    console.log('Client confirmation email sent successfully:', clientInfo.response);

    // Send success response
    res.status(200).json({ 
      success: true, 
      message: 'Project request submitted successfully!' 
    });
    
  } catch (error) {
    console.error('Error handling Get Work Done form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error: ' + (error.message || 'Unknown error')
    });
  }
};