export default function getBook(name) {
  switch(name) {
    case 'Sociolinguistics': {
      // getPadLength(counterPage) + ".jp2"
      return 'https://ia800107.us.archive.org/BookReader/BookReaderImages.php?zip=/32/items/sociolinguisticp00will/sociolinguisticp00will_jp2.zip&file=sociolinguisticp00will_jp2/sociolinguisticp00will_';
    }

    case 'Questionnaire': {
      // &page=leaf5
      return 'https://ia801505.us.archive.org/BookReader/BookReaderPreview.php?id=questionnairedes0000oppe_i2t6&subPrefix=questionnairedes0000oppe_i2t6&itemPath=/14/items/questionnairedes0000oppe_i2t6&server=ia801505.us.archive.org';
    }
  }
}

