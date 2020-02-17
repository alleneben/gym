
export default {
  fxns: {
    // endpoint:'http://localhost/gymbackend/',
    endpoint:'http://flexworkoutcenter.kitchencarelimited.com/server/',
    login: (params,url) => fetch(url,{method: 'post', body: params}).then(res => res.json()),
    base: (params,url) => fetch(url,{method: 'post', body: params}).then(res => res.json()),
    basicdata: (params,url) => fetch(url,{method: 'post', body: params}).then(res => res.json()),
    loaddata: (params,url) => fetch(url,{method: 'post', body: params}).then(res => res.json()),
    send: (params,url) => fetch(url,{method: 'post', body: params}).then(res => res.json()),
    getfile: (params,url) => fetch(url,{method: 'post', body: params})
                              .then(res => [res.blob(), res.headers.get('content-disposition')]),
    logout: (params,url) => fetch(url,{method: 'post', body: params}).then(res => res.json()),
    usercombo: (params,url) => fetch(url,{method: 'post', body: params}).then(res => res.json()),
    combo: (params,url) => fetch(url,{method: 'post', body: params}).then(res => res.json()),
    submit: (params,url) => fetch(url, {method: 'post', body: params}).then(res => res.json()),
  },
  utils:{
    formatpost: (fmdata,form) => formatpost(fmdata,form),
    getcookie: (name) => getcookie(name)
  }
}

const formatpost = (fmdata,form) => {
  let formvalues = form.props.children[1].props.children[0].props.children;
  var fm = new FormData(),props={};
  for (var key in formvalues) {
    
    if(key === 'sdt' || key === 'edt'){
      // var dt = fmdata[key].toISOString();
      // fm.append(key,dt);
    } else {      
      fm.append(formvalues[key].props.id,formvalues[key].props.value);
      props[formvalues[key].props.id]= formvalues[key].props.id.substr(formvalues[key].props.id.length-1);
    }
  }
  fm.append("s", fmdata.s);fm.append("a", fmdata.a);fm.append('m',fmdata.m);fm.append('d',fmdata.d);
  fm.append('dd',JSON.stringify(props))
  return fm;
}
const getcookie = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}