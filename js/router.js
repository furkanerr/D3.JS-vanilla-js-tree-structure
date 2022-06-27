const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocationChange();
};


const routes = {
    404:'/pages/404.html',
    '/':'/pages/home.html',
    '/home':'/pages/home.html',
    '/listPage':'/pages/listPage.html',

}
const handleLocationChange = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes['404'];
    const html = await fetch(route).then(res => res.text());
    document.getElementById('main-page').innerHTML = html;

}
window.onpopstate = handleLocationChange;
window.route = route;

handleLocationChange();

document.getElementById('button').addEventListener('click', () => {
    document.getElementsByClassName('collapse')[0].classList.toggle('show');
}
);
