
AOS.init();
setTimeout(function() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 2000);

// let cvDownload = ()=>{
//     let cvFilePath = "./assits/CV-Muhammad-Ahmed.pdf"
//     let downloadLink = document.createElement('a')
//     downloadLink.setAttribute("target","_blank");
//     downloadLink.setAttribute("download","Copy of Minimalist Web Designer Resume CV");
//     downloadLink.href = cvFilePath
//     // downloadLink.download = "CV-Muhammad-Ahmed.pdf"
//     downloadLink.click();

// }