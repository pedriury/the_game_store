const games = [
  {
      image: 'styles/images/swordmage.png',
      title: 'the sword mage',
      desc: 'a wizard who doesnt use magic',
      page: 'scripts/dload/swordMage.html',
  },
  {
      image: 'styles/images/topzombies.png',
      title: 'topZombie',
      desc: 'a top down wave survival game',
      page: 'scripts/dload/topZombies.html',
  },
  {
      image: 'styles/images/sn.png',
      title: 'SN',
      desc: '',
      page: 'dload/topZombies'
  },
  {
      image: 'styles/images/sp.png',
      title: 'Simple',
      desc: 'a psychological horror game',
  },
  {
      image: 'styles/images/tpr.png',
      title: 'topZombies Remake',
      desc: 'a prettier version with more content',
  },
  {
    image: 'styles/images/swordmage.png',
    title: 'the sword mage',
    desc: 'a wizard who doesnt use magic',
    page: 'scripts/dload/swordMage.html',
},
{
    image: 'styles/images/topzombies.png',
    title: 'topZombie',
    desc: 'a top down wave survival game',
    page: 'scripts/dload/topZombies.html',
},
{
    image: 'styles/images/sn.png',
    title: 'SN',
    desc: '',
    page: 'dload/topZombies'
},
{
    image: 'styles/images/sp.png',
    title: 'Simple',
    desc: 'a psychological horror game',
},
{
    image: 'styles/images/tpr.png',
    title: 'topZombies Remake',
    desc: 'a prettier version with more content',
    
},

{
  image: 'styles/images/swordmage.png',
  title: 'the sword mage',
  desc: 'a wizard who doesnt use magic',
  page: 'scripts/dload/swordMage.html',
},
{
  image: 'styles/images/topzombies.png',
  title: 'topZombie',
  desc: 'a top down wave survival game',
  page: 'scripts/dload/topZombies.html',
},
{
  image: 'styles/images/sn.png',
  title: 'SN',
  desc: '',
  page: 'dload/topZombies'
},
{
  image: 'styles/images/sp.png',
  title: 'Simple',
  desc: 'a psychological horror game',
},
{
  image: 'styles/images/tpr.png',
  title: 'topZombies Remake',
  desc: 'a prettier version with more content',
},
];
const categories = [...new Set(games.map((item) => {return item}))]
document.getElementById('search').addEventListener('keyup', (e) =>{
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item)=> {
      return(item.title.toLowerCase().includes(searchData))
  })
  display(filteredData)
});

const display = (items) => {
  document.getElementById('left_body').innerHTML = items.map((item) => {
      var{image,title,desc,page} = item;
      return(
          `
            <a href="${page}">
                <button class="content">
                    <div>
                        <img src="${image}" class="img">
                    </div>

                    <div class="desc">
                        <h1>${title}</h1>
                        <p>${desc}</p>
                    </div>
                </button>
            </a>
          `
      )
  }).join('')
};
display(categories);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }