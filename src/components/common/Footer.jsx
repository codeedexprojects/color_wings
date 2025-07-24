import React, { useEffect } from 'react';
import { Mail, Phone, Globe, MapPin, Instagram, Send } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from 'react-icons/fa';


const ContactFooter = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
        });
    }, []);
    return (
        <footer className="text-white">
            {/* Call to Action Banner */}
            <div className="bg-red-600 text-white py-24 px-4 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto text-start">
                    <h2 className="text-5xl md:text-[80px] lg:text-[100px] font-extrabold leading-tight uppercase"
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        BE OUR <br /> NEXT VALUED <br /> CLIENT!
                    </h2>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-red-600 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content - Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                CONTACT US
                            </h2>

                            <div className="space-y-6">
                                {/* Email */}
                                {/* Email */}
                                <div className="flex items-center space-x-4">
                                    <Mail className="w-6 h-6 text-white" />
                                    <a href="mailto:info@colorwingads.com" className="text-xl font-medium text-white hover:underline">
                                        info@colorwingads.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-6 h-6 text-white" />
                                    <a href="tel:+971565037735" className="text-xl font-medium text-white hover:underline">
                                        +971 56 503 7735
                                    </a>
                                </div>

                                {/* Website */}
                                <div className="flex items-center space-x-4">
                                    <Globe className="w-6 h-6 text-white" />
                                    <a href="https://www.colorwingads.com" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-white hover:underline">
                                        www.colorwingads.com
                                    </a>
                                </div>


                                {/* Address */}
                                <div className="flex items-start space-x-4 mt-8">
                                    <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                                    <div className="text-lg">
                                        <p className="font-medium">RKM Building,</p>
                                        <p className="font-medium">First Floor - 101</p>
                                        <p className="font-medium">Al Qiyadha, Dubai - UAE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Google Maps Iframe */}
                        <div className="lg:pl-8">
                            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <span className="text-lg font-medium text-white">colorwing_ads</span>

                        <div className="flex space-x-6">
                            <a
                                href="https://www.instagram.com/colorwing_ads?igsh=MWIwb2Nva2p5OTRsYg=="
                                className="text-white hover:text-red-400 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>

                            <a
                                href="https://wa.me/971565037735"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-red-400 transition-colors"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                        </div>

                        <p className="text-sm text-gray-400">© 2025 Colorwings. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default ContactFooter;