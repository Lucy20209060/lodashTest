// import Vue from 'vue'

export const onlynumber = {
	bind: function(el) {
        el.handler = function() {
            el.value = el.value.replace(/([0-9]+.[0-9]{2})[0-9]*/,'$1')
			console.log(el.value)
        }
        el.addEventListener('input', el.handler)
    },
    unbind: function(el) {
        el.removeEventListener('input', el.handler)
    }
}
