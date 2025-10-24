import React from 'react';

const Map = () => {
    return (
        <div className="w-full h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.8934744259797!2d-106.95793092346104!3d44.797432071070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66e7f5%3A0x6b24e2f1b9f6b8c!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sus!4v1678886330000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps Location of Ignition Consulting Group LLC"
            ></iframe>
        </div>
    );
};

export default Map;
