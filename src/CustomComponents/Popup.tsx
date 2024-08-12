import React from 'react';
// Ensure you've installed tailwindcss and imported its CSS in your project, typically in index.css or App.css

export default function Popup(props:any) {
    const [popUp, setPopUp] = React.useState(false);

    function toggle() {
        setPopUp(prevPopUp => !prevPopUp);
    }

    return (
        <section>
            <div className='cursor-pointer border border-gray-300 rounded p-7 text-center' onClick={toggle}>
                <h3 className='text-gray-900'>{props.title}</h3>
                <img className="w-full h-full object-cover rounded" src={props.image} alt="" />
            </div>

            {popUp && 
            <div className="fixed inset-0 flex items-center justify-center px-4 py-8 bg-white border border-black rounded shadow-md md:w-auto md:max-w-none md:px-5 md:py-10 md:translate-x-[-50%] md:translate-y-[-50%] md:left-1/2 md:top-1/2 md:max-h-[80%] z-50 text-center">
                <button className="absolute top-2.5 right-2.5 bg-transparent border-none text-3xl font-bold cursor-pointer p-0 leading-none" onClick={toggle}>&times;</button>
                {props.title}
                <br/>
                {props.description}
            </div>
            }

        </section>
    );   
}
