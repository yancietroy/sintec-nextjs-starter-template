import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';

export const metadata = {
  title: 'Privacy Policy - Sponge Pro Cleaning Services',
  description: 'Privacy Policy for Sponge Pro Cleaning Services. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PageHeader title="Privacy Policy" navTitle="Privacy Policy" />

      <section className="privacy-policy-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="privacy-content">

                <h3>Introduction</h3>
                <p>
                  At Sponge Pro Cleaning Services, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://www.spongeprocleaningservices.com/, use our services, or interact with us in other ways.
                </p>

                <h3>Information We Collect</h3>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li><strong>Personal Information:</strong> This includes your name, address, phone number, email address, and any other details you provide when requesting a service or contacting us.</li>
                  <li><strong>Payment Information:</strong> If you make a payment, we may collect payment details, such as credit card numbers and billing information, through our secure payment processing system.</li>
                  <li><strong>Service Details:</strong> Information about the services you request or receive, including any specific requirements or preferences you have.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including IP addresses, browser types, pages visited, and time spent on our site.</li>
                </ul>

                <h3>How We Use Your Information</h3>
                <p>We use your information for various purposes, including:</p>
                <ul>
                  <li>To provide and manage our cleaning services.</li>
                  <li>To process payments and handle billing.</li>
                  <li>To communicate with you, including responding to inquiries and providing service updates.</li>
                  <li>To improve our services and website based on user feedback and usage patterns.</li>
                  <li>To send promotional materials or newsletters if you have opted in to receive them (you can opt out at any time).</li>
                </ul>

                <h3>How We Share Your Information</h3>
                <p>We may share your information in the following situations:</p>
                <ul>
                  <li><strong>Service Providers:</strong> With third-party vendors and service providers who assist us in delivering our services and processing payments. These parties are contractually obligated to protect your information and use it only for the purposes for which it was provided.</li>
                  <li><strong>Legal Requirements:</strong> If required by law or in response to legal processes, to protect our rights, or to comply with legal obligations.</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of all or a portion of our business, where your information may be transferred as part of the transaction.</li>
                </ul>

                <h3>Data Security</h3>
                <p>
                  We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h3>Your Rights</h3>
                <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                  <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information.</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                  <li><strong>Opt-Out:</strong> Opt out of receiving promotional communications from us.</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>

                <h3>Cookies and Tracking Technologies</h3>
                <p>
                  Our website may use cookies and other tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us remember your preferences and improve our services. You can manage cookie preferences through your browser settings.
                </p>

                <h3>Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies before providing any personal information.
                </p>

                <h3>Changes to This Privacy Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on our website with the updated effective date. We encourage you to review this policy periodically.
                </p>

                <h3>Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
                <div className="contact-details" style={{ backgroundColor: '#f8f9fa', padding: '20px', marginTop: '20px', borderRadius: '5px' }}>
                  <h4>Sponge Pro Cleaning Services</h4>
                  <p><strong>Email:</strong> <a href="mailto:admin@spongeprocleaningservices.com">admin@spongeprocleaningservices.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+12042028257">+1-204 202 8257</a></p>
                  <p><strong>Location:</strong> Winnipeg, MB R3G 2H5, Canada</p>
                </div>

                <div className="thank-you" style={{ textAlign: 'center', marginTop: '40px', padding: '20px', backgroundColor: '#1e3a8a', color: '#ffffff', borderRadius: '5px' }}>
                  <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>Thank you for trusting Sponge Pro Cleaning Services with your cleaning needs</h4>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}