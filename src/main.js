const $siteList = $('.siteList')
const $lastLi = $('.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
  { logo: 'T', url: 'https://www.taobao.com/' },
  { logo: 'B', url: 'https://www.bilibili.com/' },
  { logo: 'I', url: 'https://www.iconfont.cn/' }
]
const simplifyUrl = (url) => {
  return url
    .replace('https://', '')
    .replace('www.', '')
    .replace(/\/.*/, '')
}
const render = () => {
  $siteList.find('li:not(.last)').remove()
  hashMap.forEach((node, index) => {
    const $li = $(`<li>
    <div class="site">
      <div class="logo">
        ${node.logo[0]}
      </div>
      <div class="link">${simplifyUrl(node.url)}</div>
      <div class ="close"><img class ="closeImg"src="../img/close.png" alt=""></div>
    </div>
  </li>`).insertBefore($lastLi)
    $li.on('click', () => {
      window.open(node.url)
    })
    $li.on('click', '.close', (e) => {
      e.stopPropagation()
      hashMap.splice(index, 1)
      render()
    })
  },
  )
}

{/* <li>
<a href="https://www.taobao.com/">
  <div class="site">
    <div class="logo">
      <img src="../img/taobao.png" alt="" />
    </div>
    <div class="link">taobao.com</div>
  </div>
</a>
</li>
<li>
<a href="https://www.iconfont.cn/">
  <div class="site">
    <div class="logo">图</div>
    <div class="link">iconfont.cn</div>
  </div>
</a>
</li>
<li>
<a href="https://www.bilibili.com/">
  <div class="site">
    <div class="logo">
      <img src="../img/bilibili.png" alt="" />
    </div>
    <div class="link">bilibili.com</div>
  </div>
</a>
</li> */}
render()

$('.addButton').on('click', () => {
  let url = window.prompt('请问您要访问的网址是什么')
  if (url.indexOf('http') !== 0) {
    url = 'https://' + url
  }
  hashMap.push(
    {
      logo: simplifyUrl(url)[0].toUpperCase(),
      url: url
    });

  render()
})

window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap)
  localStorage.setItem('x', string)
}
document.addEventListener('keypress', (e) => {
  const key = e.key
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url)
    }
  }
})