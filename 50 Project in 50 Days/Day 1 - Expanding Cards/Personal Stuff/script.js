// Select all Panel items
const panelItems = document.querySelectorAll('.panel-item');

panelItems.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active');
    })
})

function removeActiveClass() {
    panelItems.forEach(panel => {
        panel.classList.remove('active')
    })
}