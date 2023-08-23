const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

console.log(animated_bgs)

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"/>'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, ab!'
    profile_img.innerHTML = '<img src="https:/randomuser.me/api/portraits/men/45.jpg" alt="" />'
    name.innerHTML = 'saber'
    date.innerHTML = 'jan 8th, 2023'

    animated_bgs.forEach(bg => bg.classList.remove('animated_bgs'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated_bg-text'));
}
