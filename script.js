let open_btn = document.querySelector('.ticket-menu-open');
let close_btn = document.querySelector('.ticket-menu-close');
let ticket_menu_widget = document.querySelector('.ticket-menu-widget');
let issues = document.querySelector('.info-section__issues__container-wrapper');
let chat = document.querySelector('.chat-section__chat-area');

open_btn.addEventListener("click",()=>{
    ticket_menu_widget.classList.remove("hide");
    open_btn.classList.add("hide");
});

close_btn.addEventListener("click",()=>{
    ticket_menu_widget.classList.add("hide");
    open_btn.classList.remove("hide");
});

issues.scrollTop = issues.scrollHeight - issues.clientHeight - 20;
chat.scrollTop = chat.scrollHeight - chat.clientHeight;