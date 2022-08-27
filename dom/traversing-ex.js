const template = `
<div class="model">
<div class="model-content">
    <i class="fa fa-times model-close"></i>
    <div class="model-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias quos vel corrupti error quod, cupiditate cum voluptatem doloremque aliquid perspiciatis. Officia blanditiis, eos voluptates quos necessitatibus ut tempora suscipit.</div>
    <div class="model-action">
        <button class="model-submit">Confirm</button>
        <button class="model-cancel">Cancel</button>
    </div>
</div>
</div>`;
document.body.insertAdjacentHTML("afterbegin", template);
const model = document.querySelector(".model");
if(model){
    setTimeout(function(){
        model.classList.add("is-show");
    }, 3000);
}

