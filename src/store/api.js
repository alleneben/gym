export default {
  fxns: {
    endpoint:'http://gym.loc/service/',
    DB:'gym',
    // endpoint:'http://flexworkoutcenter.kitchencarelimited.com/server/',
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
    formatpost: (bp,form) => formatpost(bp,form),
    formatpostfieldset: (bp,form) => formatpostfieldset(bp,form),
    formatpostsearch: (data) => formatpostsearch(data),
    getcookie: (name) => getcookie(name)
  }
}

const config ={DB: 'gym'}


const formatpost = (bp,form) => {
  
  var fm = new FormData(),props={};
  if(form.data){
    fm.append('amt',bp.amt);
    fm.append('rid',bp.data.rid)
    props = {'rid':'n','amt':'n'}
  } else {
    let formvalues = form.props.children[1].props.children[0].props.children;
    for (var key in formvalues) {
      if(key === 'sdt' || key === 'edt'){
        // var dt = bp[key].toISOString();
        // fm.append(key,dt);
      } else {      
        fm.append(formvalues[key].props.id,formvalues[key].props.value);
        props[formvalues[key].props.id]= formvalues[key].props.id.substr(formvalues[key].props.id.length-1);
      }
    }
  }

  
  fm.append("s", bp.s);fm.append("a", bp.a);fm.append('m',bp.m);fm.append('d',bp.d);
  fm.append('dd',JSON.stringify(props));fm.append('c',config.DB);

  return fm;
}

const formatpostfieldset = (bp,form) => {
  // console.log(form.props.children[1].props.children[0].props.children);

  
  let formvalues = form.props.children[1].props.children[0].props.children;
  var fm = new FormData(),props={};
  formvalues.map((fv,key) => {
    fv.props.children.map((fld,fky) => {
      if(fld.props.children){

      } else {
        fm.append(fld.props.id,fld.props.value);
        props[fld.props.id]= fld.props.id.substr(fld.props.id.length-1);

        
      }
    })
  })

  fm.append("s", bp.s);fm.append("a", bp.a);fm.append('m',bp.m);fm.append('d',bp.d);
  fm.append('dd',JSON.stringify(props));fm.append('c',config.DB);
  return fm;
}
const formatpostsearch = (tbcfg) => {

  const { dbcfg, params } = tbcfg
  
  var fm = new FormData()
  for (var key in params) {    
    if(key === 'sdt' || key === 'edt'){
      // var dt = bp[key].toISOString();
      // fm.append(key,dt);
    } else {      
      fm.append(key,params[key]);
      // props[params[key].props.id]= params[key].props.id.substr(formvalues[key].props.id.length-1);
    }
  }

  fm.append("s", dbcfg.s);fm.append("a", dbcfg.a);fm.append('m',dbcfg.m);fm.append('d',dbcfg.d);
  fm.append('dd',JSON.stringify(dbcfg.props));fm.append('c',config.DB);
  return fm;
}
const getcookie = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}
