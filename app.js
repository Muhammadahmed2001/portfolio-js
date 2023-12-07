
AOS.init();


let cvDownload = ()=>{
    let cvFilePath = "./assits/CV-Muhammad-Ahmed.pdf"
    let downloadLink = document.createElement('a')
    downloadLink.setAttribute("target","_blank");
    downloadLink.href = cvFilePath
    downloadLink.download = "CV-Muhammad-Ahmed.pdf"
    downloadLink.click();

}