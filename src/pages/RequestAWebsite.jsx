import './requestawebsite.css';
export default function RequestAWebsite() {
    return (
        <div className="form-container">
      <h5>Client Website Questionnaire</h5>
      <form className="questionnaire-form" action="https://formspree.io/f/mkgwnzbl" method="POST">
        {/* About the Client */}
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Full Name" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email Address" required />
        </div>
        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input type="text" id="businessName" name="businessName" placeholder="Enter your business name" required />
        </div>

        {/* Website Goals and Purpose */}
        <div className="form-group">
          <label htmlFor="websitePurpose">Website Purpose</label>
          <select id="websitePurpose" name="websitePurpose" required>
            <option value="">Select purpose</option>
            <option value="brand-awareness">Brand Awareness</option>
            <option value="sales">Sales</option>
            <option value="leads">Lead Generation</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Design and Branding */}
        <div className="form-group">
          <label htmlFor="branding">Branding Information</label>
          <textarea id="branding" name="branding" placeholder="Provide details about your logo, colors, or branding guidelines" rows="3" required></textarea>
        </div>

        {/* Features and Functionality */}
        <div className="form-group">
          <label htmlFor="features">Website Features</label>
          <textarea id="features" name="features" placeholder="List the features you need (e.g., contact form, e-commerce)" rows="3" required></textarea>
        </div>

        {/* Type of Website */}
        <div className="form-group">
          <label htmlFor="type">Type of Website</label>
          <select id="type" name="type" required>
            <option value="business">Business Website</option>
            <option value="ecommerce">E-commerce</option>
            <option value="portfolio">Portfolio</option>
            <option value="blog">Blog</option>
            <option value="landing">Landing Page</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Number of Pages */}
        <div className="form-group">
          <label htmlFor="pages">Number of Pages</label>
          <input type="number" id="pages" name="pages" min="1" placeholder="e.g., 5" required />
        </div>

        {/* Technical and Maintenance */}
        <div className="form-group">
          <label htmlFor="technical">Domain & Hosting</label>
          <textarea id="technical" name="technical" placeholder="Do you have a domain name and hosting?" rows="3" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="maintenance">Maintenance</label>
          <textarea id="maintenance" name="maintenance" placeholder="Do you need ongoing support or maintenance?" rows="3" required></textarea>
        </div>

        {/* Budget and Timeline */}
        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input type="text" id="budget" name="budget" placeholder="Enter Your Estimated Budget (or let's Talk)" required />
        </div>

        <div className="form-group">
          <label htmlFor="timeline">Desired Launch Date</label>
          <input type="date" id="timeline" name="timeline" required />
        </div>

        {/* Content and Assets */}
        <div className="form-group">
            <label htmlFor="content">Your Thoughts and Requests</label>
            <textarea id="content" name="content" placeholder="Share your ideas, special requests, or any details you'd like us to know about your website project." rows="4" ></textarea>
        </div>


        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="submit-button">Submit Questionnaire</button>
        </div>
      </form>
    </div>
    )
}