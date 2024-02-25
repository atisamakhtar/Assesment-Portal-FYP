import React from 'react';
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ContactForm = () => {
    return (
        <>
            <form>
                <div className='md:flex justify-between my-2' >
                    <div className="mx-4 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mx-4 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                </div>
                <div className='md:flex justify-between my-8' >
                    <div className="mx-4 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="mob">Mobile No</Label>
                        <Input type="text" id="mob" placeholder="Mobile Number" />
                    </div>
                    <div className="mx-4 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="add">Address</Label>
                        <Input type="text" id="add" placeholder="Address" />
                    </div>
                </div>

                <div className='mx-4' >
                    <Label htmlFor="">Your Message</Label><br />
                    <textarea className='w-full border-2 border-gray-200 p-3 ' name="msg" id="" cols={30} rows={10}></textarea>
                </div>
            </form>
        </>
    )
}

export default ContactForm