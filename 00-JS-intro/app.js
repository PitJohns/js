const list = document.getElementById('list')
const filter = document.getElementById('filter')
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const content = document.getElementById('content')


list.addEventListener('click', (event) => {
  if (event.target.dataset.id) {
    const user = USERS.find((u) => u.id  +event.target.dataset.id) 
    showModalWithUser(user)
  }
})   