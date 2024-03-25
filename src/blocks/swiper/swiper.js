// import Swiper JS
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 768px)', '.brands__list', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.devices__list', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.prices__list', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})
