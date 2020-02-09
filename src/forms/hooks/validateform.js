export default function validateform(val){
    let errors = {};
    if(!val.unm){
        errors.unm = 'Required Username';
    }
    if(!val.pwd){
        errors.pwd = 'Required Password';
    } else if(val.pwd.length < 0){
        errors.pwd = 'Password must be at least 1 characters';
    }
    return errors;
}