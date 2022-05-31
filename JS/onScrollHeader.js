$(document).ready(() => {

   const onScrollHeader = () => {

      const header = $('.header')

      let prevScroll = $(window).scrollTop()
      let currentScroll

      $(window).scroll(() => {

         currentScroll = $(window).scrollTop()

         const headerHidden = () => header.hasClass('header_hidden')

         if (currentScroll > prevScroll && !headerHidden()) {
            header.addClass('header_hidden')
         }
         if (currentScroll < prevScroll && headerHidden()) {
            header.removeClass('header_hidden')
         }

         prevScroll = currentScroll
      })
   }

   onScrollHeader()
})

