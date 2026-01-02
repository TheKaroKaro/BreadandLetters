---
layout: default
title: Let's Connect
description: Discuss automation consulting or Power Platform development.
permalink: /contact/  # Changed from /profile/ to /contact/
---

<div class="max-w-6xl mx-auto px-4 py-16">
  <div class="text-center mb-16">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
      Whether it's a project or a career discussion—I'd love to hear from you.
    </p>
  </div>

  <div class="grid md:grid-cols-3 gap-12">
    <div class="md:col-span-1">
      <div class="bg-white rounded-2xl p-8 border shadow-sm sticky top-24">
        <h3 class="text-xl font-bold mb-6">Direct Channels</h3>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <i class="fas fa-envelope text-teal-600"></i>
            <a href="mailto:{{ site.email }}" class="hover:text-teal-600">{{ site.email }}</a>
          </div>
          <div class="flex items-center gap-4">
            <i class="fab fa-linkedin text-blue-600"></i>
            <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" class="hover:text-teal-600">LinkedIn Profile</a>
          </div>
          <div class="flex items-center gap-4">
            <i class="fas fa-map-marker-alt text-red-500"></i>
            <span>{{ site.author.location }}</span>
          </div>
          <div class="flex items-center gap-4">
            <i class="fab fa-telegram text-blue-400"></i>
            <span class="text-sm text-gray-600">Messages go to Telegram</span>
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-span-2">
      <!-- Success/Error Message Display -->
      <div id="form-message" class="hidden mb-6 p-4 rounded-lg text-center transition-all duration-300"></div>
      
      <!-- Hidden honeypot field for spam protection -->
      <div class="hidden">
        <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
      </div>
      
      <!-- Telegram Form -->
      <form id="telegram-form" class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input type="text" name="name" required 
                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                   placeholder="Your name">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input type="email" name="email" required 
                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                   placeholder="you@example.com">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
          <textarea name="message" rows="5" required 
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    placeholder="Tell me about your project or inquiry..."></textarea>
        </div>
        <button type="submit" id="submit-btn" 
                class="w-full py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
          <span id="btn-text">Send Message</span>
          <svg id="spinner" class="hidden w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>
        <p class="text-xs text-gray-500 text-center mt-4">
          Messages are sent directly to my Telegram. I'll respond within 24 hours.
        </p>
      </form>
    </div>
  </div>
</div>

<script>
// Your Google Apps Script URL (replace with your actual URL after deployment)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5aahnsj_zvQw96zcz0a0wV24FVcXO82byrAXchNAI91M1yR-PO6OUF-5sKFhxReUJ/exec';

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('telegram-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const spinner = document.getElementById('spinner');
  const messageDiv = document.getElementById('form-message');
  
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Spam protection - check honeypot field
    const honeypot = document.getElementById('website').value;
    if (honeypot) {
      console.log('Spam detected - honeypot filled');
      return;
    }
    
    // Validate form
    const formData = new FormData(form);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();
    
    if (!name || !email || !message) {
      showMessage('error', 'Please fill in all required fields.');
      return;
    }
    
    // Show loading state
    btnText.textContent = 'Sending...';
    spinner.classList.remove('hidden');
    submitBtn.disabled = true;
    messageDiv.classList.add('hidden');
    
    try {
      // Prepare data for Telegram
      const data = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString(),
        source: window.location.href
      };
      
      console.log('Sending data:', data);
      
      // Send to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Important for Google Apps Script
        body: JSON.stringify(data)
      });
      
      // Note: With 'no-cors' mode, we can't read the response
      // But if it doesn't throw an error, it was sent successfully
      
      // Show success message
      showMessage('success', 'Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        form.reset();
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      showMessage('error', `Error: ${error.message}. Please try again or email me directly.`);
      
    } finally {
      // Reset button state
      btnText.textContent = 'Send Message';
      spinner.classList.add('hidden');
      submitBtn.disabled = false;
    }
  });
  
  // Function to show messages
  function showMessage(type, text) {
    messageDiv.textContent = text;
    
    if (type === 'success') {
      messageDiv.className = 'bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 text-center';
      messageDiv.innerHTML = `
        <div class="flex items-center justify-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="font-medium">${text}</span>
        </div>
      `;
    } else {
      messageDiv.className = 'bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center';
      messageDiv.innerHTML = `
        <div class="flex items-center justify-center gap-2">
          <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-medium">${text}</span>
        </div>
      `;
    }
    
    messageDiv.classList.remove('hidden');
    
    // Auto-hide after 8 seconds (only for errors)
    if (type === 'error') {
      setTimeout(() => {
        messageDiv.classList.add('hidden');
      }, 8000);
    }
  }
  
  // Add real-time validation feedback
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('border-red-500');
        this.classList.add('border-green-500');
      } else {
        this.classList.remove('border-green-500');
        this.classList.add('border-red-500');
      }
    });
    
    input.addEventListener('blur', function() {
      this.classList.remove('border-green-500', 'border-red-500');
      this.classList.add('border-gray-300');
    });
  });
  
  // Test connection on page load (optional)
  console.log('Contact form loaded. Google Script URL:', GOOGLE_SCRIPT_URL);
});
</script>

<!-- Fallback for browsers without JavaScript -->
<noscript>
  <style>
    #telegram-form { display: none; }
  </style>
  <div class="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-6 text-center">
    <p class="font-semibold mb-2">JavaScript is required for the contact form.</p>
    <p>Please enable JavaScript or contact me directly via email.</p>
  </div>
</noscript>