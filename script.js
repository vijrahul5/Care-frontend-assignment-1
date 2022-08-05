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

issues.scrollTop = issues.scrollHeight - issues.clientHeight;
chat.scrollTop = chat.scrollHeight - chat.clientHeight;

let customerInsights = document.querySelector('.info-section__customer-insights');
let shows = document.querySelector('.info-section__shows');
let issues_container = document.querySelector('.info-section__issues');
let infoSection = document.querySelector('.info-section');
let height = infoSection.clientHeight - customerInsights.clientHeight - shows.clientHeight;
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
if(vw > 1050){
    issues_container.style.height = Math.max(height,400) + "px";
}
