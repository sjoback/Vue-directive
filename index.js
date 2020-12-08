import Vue from 'vue';

Vue.directive('anim', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 ||
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight - 300)
  },

  bind(el, binding) {
    el.classList.add('before-anim')
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('anim')
        el.classList.remove('before-anim')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})
