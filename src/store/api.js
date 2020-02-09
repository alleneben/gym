
export default {
  fxns: {
    // endpoint:'http://172.104.244.238/biz/bis/',
    // endpoint:'http://vpos.versified.xyz/biz/bis/',
    // endpoint:'http://172.105.90.220/biz/bis/',
    endpoint:'http://localhost/gymbackend/',
    // endpoint:'http://metalcraftapp.com/biz/bis/',
    //imageurl:'http://metalcraftapp.com/biz/files/photos/',
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
    formatpost: (fmdata) => formatpost(fmdata)
  }
}

const formatpost = (fmdata) => {
  var fm = new FormData();
  for (var key in fmdata) {
    if(key === 'sdt' || key === 'edt'){
      var dt = fmdata[key].toISOString();
      fm.append(key,dt);
    }else {
      fm.append(key,fmdata[key]);
    }
  }
  return fm;
}
