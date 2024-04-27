'use client'


export default function ContactForm() {


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: 'f01ef5e4-ecfe-4f2f-80ad-28001d27709d',
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="flex items-center flex-col gap-2 w-full" >
                <h1>Send Me a Message !!</h1>
                <div className=" flex items-center justify-center md:flex-row flex-col gap-5 w-full">
                    <input type="text" name="name" required placeholder="Sender Name " className="rounded-sm w-full outline-none px-2 text-lg text-black" />
                    <input type="text" name="email" required placeholder="Email " className="rounded-sm w-full outline-none px-2 text-lg text-black" />
                </div>
                <textarea placeholder="Message" name="message" required className=" w-full h-[150px] outline-none text-black p-2 rounded-sm " />

                <button type='submit' className="  bg-white text-black  w-[50%] hover:bg-black hover:text-white transition-all p-1 rounded-md">SEND</button>
            </form>
        </>
    );
}

