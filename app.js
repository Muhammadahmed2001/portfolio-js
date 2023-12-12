
AOS.init();


// let cvDownload = ()=>{
//     let cvFilePath = "./assits/CV-Muhammad-Ahmed.pdf"
//     let downloadLink = document.createElement('a')
//     downloadLink.setAttribute("target","_blank");
//     downloadLink.setAttribute("download","Copy of Minimalist Web Designer Resume CV");
//     downloadLink.href = cvFilePath
//     // downloadLink.download = "CV-Muhammad-Ahmed.pdf"
//     downloadLink.click();

// }


const CvButton = () => {
  const handleDownload = () => {
    // Replace 'example.pdf' with the path to your PDF file.
    const pdfPath = "./assits/ahmedKarim.pdf";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdfPath;

    // Set the download attribute to specify the file name
    link.download = "downloaded.pdf";

    // Programmatically trigger a click event to start the download
    link.click();
  };
  handleDownload()
}



