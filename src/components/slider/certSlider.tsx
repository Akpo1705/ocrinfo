import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CertificateSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const certificates = [
        { id: 1, src: 'http://placehold.it/640x70/', alt: 'Сертификат 1' },
        { id: 2, src: 'http://placehold.it/640x70/', alt: 'Сертификат 2' },
        // Добавьте другие сертификаты здесь
    ];

    return (
        <div className="my-5 flex justify-center">
            <div className="w-full max-w-md"> {/* Ограничиваем ширину слайдера */}
                <Slider {...settings}>
                    {certificates.map((certificate) => (
                        <div key={certificate.id} className="flex justify-center">
                            <img
                                src={certificate.src}
                                alt={certificate.alt}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CertificateSlider;
