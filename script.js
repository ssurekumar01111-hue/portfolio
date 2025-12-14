document.getElementById("contactForm").addEventListener("submit",e=>{
e.preventDefault();
document.getElementById("status").innerText="Thank you! I’ll get back to you soon.";
e.target.reset();
});