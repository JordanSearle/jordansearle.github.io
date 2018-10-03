/**
 * Only run Javascript functions when the page has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    removeBodyLoadingAnimation();
    addLinkEventListeners();
});

/**
 * Functions
 */
function addLinkEventListeners() {
    const links = document.querySelectorAll('.link');

    links.forEach((link) => {
        link.addEventListener('mouseenter', () => { addAnimationClasses(link) });
        link.addEventListener('animationend', () => { removeAnimationClasses(link) });
    });
}

/**
 * Remove the body loading animations
 */
function removeBodyLoadingAnimation() {
    const body = document.querySelector('body');

    body.classList.remove('animated', 'tada');
}

/**
 * Add an animation
 *
 * @param element
 */
function addAnimationClasses(element){
    element.classList.add('animated','tada');
}

/**
 * Remove an animation
 *
 * @param element
 */
function removeAnimationClasses(element){
  element.classList.remove('animated','tada');
}
