import { useState, useEffect } from 'react';

import { useStore } from '../../store/';


const useForm = (initialstate, validate, submitdata,store) => {
    const [val, setvalues] = useState(initialstate)
    const [errors, seterrors] = useState({})
    const [submitting, setsubmitting] = useState(false)
    const [invalid, setinvalid] = useState('')
    const [type, settype] = useState(store.type)
    const [action, setaction] = useState(store.action)
   
    const [opacity, setopacity] = useState(1)

    const {dispatch} = useStore();


    useEffect(() => {

        if(submitting){
            const noerrors = Object.keys(errors).length === 0;       
            if(noerrors){

                submitdata(val)
                .then(rd => {
                    // console.log(rd);
                    
                    setsubmitting(false)
                    setopacity(1)
                    if (rd.success) {                                       
                        if(type==='payment'){

                        } else {
                            setvalues({s:val.s,a:val.a,d:val.d,m:val.m})
                        } 
                        dispatch({ type:type, payload:rd, action:action }); 
                    } else {
                        // console.log(rd)
                        setinvalid(rd[0])
                    }
                },err => {setsubmitting(false);setopacity(1);console.log(err)})
            } else {
                setsubmitting(false)
            }   
        }
    },[submitting,errors,opacity])

    const onChange = e => setvalues({...val, values:{...val.values,[e.target.name]: e.target.value}})

    const onFileChange = e => {
        setvalues({...val, values:{...val.values,imgt: e.target.files[0] }})
    }

    
    const handleblur = () => {
        const validationerrors = validate(val)
        seterrors(validationerrors)
    }

    const handleSubmit = (e,fn) => {
        
        e.preventDefault()
        // const validationerrors = validate(val)
        // seterrors(validationerrors)
        setsubmitting(true);
        setopacity(0.3)
    }

    return { onChange,onFileChange, val, handleSubmit, handleblur, errors, submitting, invalid, opacity, type, action }

}


export default useForm;