/**
 * @requires user pass de churrita user gmaik
 * 
 * @description Codigo para descargar libros de https://archive.org/
 * 
 * @author Alain Iglesias Herrera
 * 
 * @website https://smallpdf.com/merge-pdf to merge pdf pages after downloaded for free
 */
import * as $ from 'jquery';

var pageLimit = 30;
var page = 1;

function getImagesPages(counterPage) {

  if (counterPage >= pageLimit) {
    return;
  }

  const urlPagina = "https://ia800107.us.archive.org/BookReader/BookReaderImages.php?zip=/32/items/sociolinguisticp00will/sociolinguisticp00will_jp2.zip&file=sociolinguisticp00will_jp2/sociolinguisticp00will_" + getPadLength(counterPage) + ".jp2";

  console.log(urlPagina)

  createLinkForDownload(urlPagina, counterPage);
  setTimeout(() => {}, 5000);
  getImagesPages(++counterPage);
}

/**
 * Function for getting page index
 */
function getPadLength(index) {
  return ''.padStart(4 - index.toString().length, '0') + index;
}

/**
 * Function for creating link for downloading image
 */
function createLinkForDownload(img, counterPage) {
  let link = document.createElement('a');
  link.download = 'Page_' + counterPage + '.jpg';
  link.href = img;
  link.type = 'image/jpeg';
  document.body.appendChild(link);
  link.dispatchEvent(new MouseEvent('click'));
}

getImagesPages(page)



// const pageLimit = 50;
// const url = "https://ia800107.us.archive.org/BookReader/BookReaderJSIA.php?id=sociolinguisticp00will&itemPath=/32/items/sociolinguisticp00will&server=ia800107.us.archive.org&format=jsonp&subPrefix=sociolinguisticp00will&requestUri=/details/sociolinguisticp00will";

// const getJSON = async function () {

//   const response = await fetch(url);
//   const json = await response.json();
//   let pageCounter = 0;

//   // console.log(json.data)

//   for (const value of json.data.brOptions.data) {
    
//     for (const value2 of value) {
//       if (pageCounter >= pageLimit) {
//         return;
//       }
 
//       // Insert a link that allows the user to download the PDF file
//       let link = document.createElement('a');
//       link.download = 'Page_' + ++pageCounter + '.jpg';
//       link.href = value2.uri;
//       link.type = 'image/jpeg';
//       document.body.appendChild(link);
//       // link.dispatchEvent(new MouseEvent('click'));
//       console.log(link)
//     }

//   }
// }

// getJSON();
