const $siteList= $('.siteList')
const $lastLi = $('.last')
const hashMap =[
    {logo:'../img/taobao.png',logoType:'image',url:'https://www.taobao.com/'},
    {logo:'图',logoType:'text',url:'https://www.iconfont.cn/'},
    {logo:'../img/bilibili.png',logoType:'image',url:'https://www.bilibili.com/'}
]
hashMap.forEach(node =>{
    const $li = $(`<li><a href="${node.url}">
    <div class="site">
      <div class="logo">
        ${node.logo[0]}
      </div>
      <div class="link">${node.url}</div>
    </div>
  </a></li>`).insertBefore($lastLi)
})

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

$('.addButton').on('click',()=>{
   let url =  window.prompt('请问您要访问的网址是什么')
   if(url.indexOf('http') !== 0){
   url = 'https://'+url 
   }
   console.log(url)
   const $siteList= $('.siteList')
   const li = $(`<li>
   <a href="${url}">
     <div class="site">
       <div class="logo">
         ${url[0]}
       </div>
       <div class="link">${url}</div>
     </div>
   </a>
 </li>`).insertBefore($lastLi)
})