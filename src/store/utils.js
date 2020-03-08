
export default {
  fxns:{
    edit: (...data) => edit(...data),
    details: (...data) => details(...data)
  }
}

const edit = (...data) => {
  console.log(...data);
  
  return data;
}

const details = (...data) => {
    console.log(...data);
    return data
}