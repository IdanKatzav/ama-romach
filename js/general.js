const popupProperties = {
  inline: true,
  hoverable: true,
  variation: "basic",
  position: "bottom left",
  delay: {
    show: 300,
    hide: 800,
  },
};

$(document).ready(() => {
  $('#account-lists').popup(popupProperties);
  $('#cart').on('click', ()=>{
    window.location.href= "./cart.html";
  })
});

