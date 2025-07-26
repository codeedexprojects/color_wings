import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const message = `New Contact Form Submission:\n\n` +
                        `Name/Company: ${formData.name}\n` +
                        `Email: ${formData.email}\n` +
                        `Phone: ${formData.phone}\n` +
                        `Description: ${formData.description}`;
        
        const encodedMessage = encodeURIComponent(message);
        
        const whatsappNumber = '+971509374377';
        
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto p-8">
                <h2 className="text-3xl font-bold text-center text-red-600 mb-2">Get In Touch</h2>
                <p className="text-center text-gray-600 mb-8">
                    Have a project in mind? Let's connect and bring your vision to life
                </p>
    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Contact */}
                    <div className="group bg-gray-100 p-6 rounded-lg text-center transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-red-600 relative overflow-hidden">
                        <Phone className="absolute top-4 right-4 w-16 h-16 text-gray-300 group-hover:text-red-300 opacity-30 transform rotate-12" />
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-white relative z-10">Contact</h3>
                        <p className="text-red-600 font-bold group-hover:text-white relative z-10">+971 50 937 4377</p>
                    </div>
    
                    {/* Email */}
                    <div className="group bg-gray-100 p-6 rounded-lg text-center transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-red-600 relative overflow-hidden">
                        <Mail className="absolute top-4 right-4 w-16 h-16 text-gray-300 group-hover:text-red-300 opacity-30 transform rotate-12" />
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-white relative z-10">Email</h3>
                        <p className="text-red-600 font-bold group-hover:text-white relative z-10">info@colorwingads.com</p>
                    </div>
    
                    {/* Location */}
                    <div className="group bg-gray-100 p-6 rounded-lg text-center transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-red-600 relative overflow-hidden">
                        <MapPin className="absolute top-4 right-4 w-16 h-16 text-gray-300 group-hover:text-red-300 opacity-30 transform rotate-12" />
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-white relative z-10">Location</h3>
                        <p className="text-red-600 font-bold group-hover:text-white relative z-10">
                            RKM Building, First Floor - 101 <br />
                            Al Qiyadha, Dubai - UAE
                        </p>
                    </div>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Map */}
                    <div className="h-64 bg-gray-200 rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7642320141126!2d55.351372399999995!3d25.2785154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d44265e948b%3A0xb3095660e734b638!2sRKM%20Building!5e0!3m2!1sen!2sin!4v1751882910748!5m2!1sen!2sin"
                            width="100%"
                            height="320"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="lg:h-96"
                            title="Colorwing Ads Location"
                        ></iframe>
                    </div>
    
                    {/* Contact Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">NAME / COMPANY</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">PHONE NUMBER</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">DESCRIPTION</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                        >
                            Send via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="py-6 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <span className="text-lg font-medium text-black">colorwing_ads</span>
                        <div className="flex space-x-6">
                            <a
                                href="https://www.instagram.com/colorwing_ads?igsh=MWIwb2Nva2p5OTRsYg=="
                                className="text-black hover:text-red-400 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://wa.me/971509374377"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-red-400 transition-colors"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400">© 2025 Colorwings. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;