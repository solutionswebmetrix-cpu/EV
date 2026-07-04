const getDealershipOwnerEmail = (data) => {
  const text = `
    New Dealership Inquiry Received!
    
    Full Name: ${data.fullName}
    Company Name: ${data.companyName}
    Phone: ${data.phone}
    Email: ${data.email}
    State: ${data.state || 'Not provided'}
    City: ${data.city}
    Address: ${data.address || 'Not provided'}
    Investment Capacity: ${data.investmentCapacity}
    Business Experience: ${data.businessExperience || 'Not provided'}
    Message: ${data.message}
    Date: ${new Date().toLocaleString()}
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10B981;">New Dealership Inquiry Received!</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Full Name</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Company Name</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.companyName}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>State</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.state || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>City</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.city}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Address</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.address || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Investment Capacity</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.investmentCapacity}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Business Experience</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.businessExperience || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.message}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Date</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
        </tr>
      </table>
    </div>
  `;
  
  return { text, html };
};

const getDealershipCustomerEmail = () => {
  const text = `
    Thank you for applying for AeroVolt Dealership.
    Our team will contact you soon.
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10B981;">Thank You for Applying</h2>
      <p>Thank you for applying for AeroVolt Dealership.</p>
      <p>Our team will contact you soon.</p>
    </div>
  `;
  
  return { text, html };
};

const getContactOwnerEmail = (data) => {
  const text = `
    New Contact Inquiry Received!
    
    Name: ${data.fullName}
    Email: ${data.email}
    Phone: ${data.phone}
    Subject: ${data.subject}
    Message: ${data.message}
    Date: ${new Date().toLocaleString()}
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10B981;">New Contact Inquiry Received!</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Subject</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.subject}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.message}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Date</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
        </tr>
      </table>
    </div>
  `;
  
  return { text, html };
};

const getContactCustomerEmail = () => {
  const text = `
    Thank you for contacting AeroVolt.
    We have received your message successfully.
    We will get back to you shortly.
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10B981;">Thank You for Contacting AeroVolt</h2>
      <p>Thank you for contacting AeroVolt.</p>
      <p>We have received your message successfully.</p>
      <p>We will get back to you shortly.</p>
    </div>
  `;
  
  return { text, html };
};

module.exports = {
  getDealershipOwnerEmail,
  getDealershipCustomerEmail,
  getContactOwnerEmail,
  getContactCustomerEmail
};
