import React from 'react'

const Main: React.FC = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center">
                <header className="bg-blue-600 text-white w-full py-5 flex items-center justify-center">
                    <img src="https://via/placeholder.com/50" alt="training logo" className="mr-3"/>
                    <h1 className='text-3xl font-bold'>Тренировки в Железнодорожном по OCR ( @ocr_zheldor )</h1>
                </header>

                <main>
                    <section>
                        <h2 className='text-2xl font-semibold mb-3'>План тренировок</h2>
                        <p>Наши тренировки проходят в парке Ольгино город Балашиха мкрн. Железнодорожный</p>
                    </section>
                    <section>
                        <h2 className='text-2xl font-semibold mb-3'>Дополнительная информация</h2>
                        <p>Тренировки проводятся как для взврослых так и для детей от 9 лет. Присоединяйтесь. Наш ТГ @ocr_zheldor</p>
                    </section>
                </main>

                <footer className='bg-blue-600 test-white w-full py-3 text-center'>
                    2024 Ocr zheldor training, Inc.
                </footer>
            </div>
        </>
    );
};

export default Main;