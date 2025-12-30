---
layout: default
title: Let's Connect
description: Discuss automation consulting or Power Platform development.
permalink: /contact/
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
        </div>
      </div>
    </div>

    <div class="md:col-span-2">
      <form action="https://formspree.io/f/{{ site.email }}" method="POST" class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input type="text" name="name" required class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-teal-500 outline-none">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" name="email" required class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-teal-500 outline-none">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea name="message" rows="5" required class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
        </div>
        <button type="submit" class="w-full py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>