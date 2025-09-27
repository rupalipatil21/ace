import { CustomTextField, OutlinedBlackBtn } from "@/styles/common.styled";
import { Alert, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRef, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

type FormData = {
  name: string;
  email: string;
  message: string;
  phonenumber: string
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  phonenumber?: string
};

export default function FormDesign({ volunteer }:any){
    const [form, setForm] = useState<FormData>({ name: '', email: '', phonenumber: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState('');
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const validate = () => {
        const newErrors: FormErrors  = {};
        if(!volunteer) { 
            if (!form.name.trim()) newErrors.name = 'Name is required';
            if (!form.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(form.email)) {
                newErrors.email = 'Email is invalid';
            }
            if (!form.phonenumber.trim()) {
                newErrors.phonenumber = 'Phone number is required';
            } else if(!/^\d{10,15}$/.test(form.phonenumber)){
                newErrors.phonenumber = "Enter a valid phone number"
            }
        }

        if (!form.message.trim()) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleChange = (e:any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear individual field error
    };

    const buildFormData = () => {
        const { name, email, phonenumber, message } = form;
        return volunteer
            ? { message }
            : { name, email, phonenumber, message};
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            
            if (validationErrors.name) nameRef.current?.focus();
            else if (validationErrors.email) emailRef.current?.focus();
            else if (validationErrors.phonenumber) phoneRef.current?.focus();
            else if (validationErrors.message) messageRef.current?.focus();

            return;
        }

        // setStatus('Submitting...');
        try {
        const res = await fetch('/api/saveSubmission', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: buildFormData(), 
                collectionName: volunteer ? "volunteerSubmission" : "contactSubmission"
            }),
        });

        if (res.ok) {
            console.log(res);
            setStatus('Data saved successfully!');
            setForm({ name: '', email: '', phonenumber: '', message: '' });
            setErrors({});
            setTimeout(() => {
                setStatus('');
            }, 3000);
        } else {
            const data = await res.json();
            setStatus(data.message || 'Failed to send');
        }
        } catch (error) {
            setStatus('Something went wrong');
        }
    }

    return(
        <Grid container>
            <Grid size={{ xs: 12, sm: 8}} offset={{ xs: 0, sm: 2}}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ mt: {xs: volunteer ? "30px" : undefined, sm: volunteer ? "55px" : undefined }}}
                    onSubmit={handleSubmit}
                >   
                {
                    !volunteer && (
                        <>
                            <Box mb="30px">
                                <CustomTextField inputRef={nameRef} fullWidth placeholder="Name" name="name" onChange={handleChange} value={form.name}  />
                                {errors.name && <Typography component="span" variant="error" color="custom.red" >{errors.name}</Typography>}
                            </Box>
                            <Box mb="30px">
                                <CustomTextField inputRef={emailRef} fullWidth placeholder="Email Address" type="email" id="email" name="email" onChange={handleChange} value={form.email} />
                                {errors.email && <Typography component="span" variant="error" color="custom.red" >{errors.email}</Typography>}
                            </Box>
                            <Box mb="30px">
                                <CustomTextField inputRef={phoneRef} placeholder="Phone Number(Optional)" id="phonenumber" name="phonenumber"  onChange={handleChange} value={form.phonenumber} />
                                {errors.phonenumber && <Typography component="span" variant="error" color="custom.red" >{errors.phonenumber}</Typography>}
                            </Box>
                        </>
                    )
                }
                    <Box mb="30px">
                        <CustomTextField inputRef={messageRef} fullWidth placeholder="Your Message Here" multiline rows={ volunteer ? 6 : 4 } id="message" name="message" onChange={handleChange} value={form.message} />
                        {errors.message && <Typography component="span" variant="error" color="custom.red" >{errors.message}</Typography>}
                    </Box>
                    <OutlinedBlackBtn type="submit" margin="5px 0 12px"><Typography variant="btnText">Submit</Typography></OutlinedBlackBtn>
                    <Typography variant="h6Name" display="block" mb={2}>
                        Or write to us at  <Link href="mailto:info@allcareforeveryone.org"><Typography fontWeight={600} display="inline-block"> info@allcareforeveryone.org</Typography></Link>
                    </Typography>
                    { status && 
                        <Alert variant="filled" icon={<CheckIcon fontSize="inherit" />} severity={status ? "success" : "error"}>
                            {status}
                        </Alert>
                    }
                </Box>
            </Grid>
        </Grid>
    )
}