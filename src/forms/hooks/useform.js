import { useState, useEffect } from 'react';


const useForm = (initialstate, validate, submitdata) => {
    const [val, setvalues] = useState(initialstate)
    const [errors, seterrors] = useState({})
    const [submitting, setsubmitting] = useState(false)
    const [invalid, setinvalid] = useState('')
    const [rd, setrd] = useState([])
    const [opacity, setopacity] = useState(1)

    useEffect(() => {
        
        if(submitting){
            const noerrors = Object.keys(errors).length === 0;       
            if(noerrors){
                submitdata()
                .then(rd => {
                    setrd(rd)
                    setsubmitting(false)
                    setopacity(1)
                    if (rd.success) {
                        
                    } else {
                        setinvalid(rd[0])
                    }
                },err => {setsubmitting(false);console.log(err)})
            } else {
                setsubmitting(false)
            }   
        }
    },[submitting,submitdata,errors])

    const onChange = e => setvalues({...val, [e.target.name]: e.target.value})

    const handleblur = () => {
        const validationerrors = validate(val)
        seterrors(validationerrors)
    }

    const handleSubmit = (e) => {
        
        // const validationerrors = validate(val)
        // seterrors(validationerrors)
        setsubmitting(true);
        setopacity(0.3)
    }

    return { onChange, val, handleSubmit, handleblur, errors, submitting, invalid, rd,opacity }

}


export default useForm;