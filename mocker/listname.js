const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  'POST /api/user/list': (req, res) => {
    const list = [
      {
        "name": "[ps大师班,告别小白]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppsMeeg.jpg",
        "speaker": "千小喵",
        "deleteAt": "2022/12/01",
      },
      {
        "name": "[手绘设计30天速成班]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstBp4.jpg",
        "speaker": "千小喵",
        "deleteAt": "2022/12/01",
      },
      {
        "name": "[平面设计30天速成班]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstakT.jpg",
        "speaker": "千小喵",
        "favorites": true,
      },
      {
        "name": "[PS初级入门到精通]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstdtU.jpg",
        "speaker": "千小喵",
      },
      {
        "name": "[1天练就Sketch高手]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstwhF.jpg",
        "speaker": "千小喵",
      },
      {
        "name": "[AE初级入门到精通]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstBp4.jpg",
        "speaker": "千小喵",
      },
    ]
    const name = req.body.name;
    const filteredList = list.filter(item => item.name === name);
    console.log('---filteredList--->', filteredList)
    const data = filteredList.length > 0 ? filteredList[0] : {};
    console.log('---data--->', data)
    return res.json(data);
  },
}


module.exports = proxy, noProxy, delay;