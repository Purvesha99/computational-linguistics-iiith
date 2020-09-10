var text = '{"sentence":[' +
'{"first":"John ate an apple before afternoon"},'+	
'{"first":"before afternoon John ate an apple"},'+
'{"first":"John before afternoon ate an apple"},'+

'{"first":"some students like to study in the night"},'+
'{"first":"at night some students like to study"},'+

'{"first":"John and Mary went to church"},'+
'{"first":"Mary and John went to church"},'+

'{"first":"John went to church after eating	"},'+
'{"first":"after eating John went to church"},'+
'{"first":"John after eating went to church"},'+

'{"first":"did he go to market"},'+
'{"first":"he did go to market"},'+

'{"first":"the woman who called my sister sells cosmetics"},'+
'{"first":"the woman who sells cosmetics called my sister"},'+
'{"first":"my sister who sells cosmetics called the woman"},'+
'{"first":"my sister who called the woman sells cosmetics"},'+

'{"first":"John goes to the library and studies"},'+
'{"first":"John studies and goes to the library"},'+

'{"first":"John ate an apple so did she"},'+
'{"first":"she ate an apple so did John"},'+

'{"first":"the teacher returned the book after she noticed the error"},'+
'{"first":"the teacher noticed the error after she returned the book"},'+
'{"first":"after the teacher returned the book she noticed the error"},'+
'{"first":"after the teacher noticed the error she returned the book"},'+
'{"first":"she returned the book after the teacher noticed the error"},'+
'{"first":"she noticed the error after the teacher returned the book"},'+
'{"first":"after she returned the book the teacher noticed the error"},'+
'{"first":"after she noticed the error the teacher returned the book"},'+

'{"first":"I bought a book that I told her yesterday"},'+
'{"first":"I told her that I bought a book yesterday"},'+
'{"first":"yesterday I told her that I bought a book"},'+
'{"first":"I told her yesterday that I bought a book"},'+
'{"first":"I bought a book yesterday that I told her"},'+
'{"first":"yesterday I bought a book that I told her"},'+

'{"first":"राम और श्याम बाजार गयें"},'+
'{"first":"राम और श्याम गयें बाजार"},'+
'{"first":"बाजार गयें राम और श्याम"},'+
'{"first":"गयें बाजार राम और श्याम"},'+

'{"first":"राम सोया और श्याम भी"},'+
'{"first":"श्याम सोया और राम भी"},'+
'{"first":"सोया श्याम और राम भी"},'+
'{"first":"सोया राम और श्याम भी"},'+

'{"first":"मैंने उसे बताया कि राम सो रहा है"},'+
'{"first":"मैंने उसे बताया कि सो रहा है राम"},'+
'{"first":"उसे मैंने बताया कि राम सो रहा है"},'+
'{"first":"उसे मैंने बताया कि सो रहा है राम"},'+
'{"first":"मैंने बताया उसे कि राम सो रहा है"},'+
'{"first":"मैंने बताया उसे कि सो रहा है राम"},'+
'{"first":"उसे बताया मैंने कि राम सो रहा है"},'+
'{"first":"उसे बताया मैंने कि सो रहा है राम"},'+
'{"first":"बताया मैंने उसे कि राम सो रहा है"},'+
'{"first":"बताया मैंने उसे कि सो रहा है राम"},'+
'{"first":"बताया उसे मैंने कि राम सो रहा है"},'+
'{"first":"बताया उसे मैंने कि सो रहा है राम"},'+

'{"first":"राम खाकर सोया"},'+
'{"first":"खाकर राम सोया"},'+
'{"first":"राम सोया खाकर"},'+
'{"first":"खाकर सोया राम"},'+
'{"first":"सोया राम खाकर"},'+
'{"first":"सोया खाकर राम"},'+

'{"first":"बिल्लियों को मारकर कुत्ता सो गया"},'+
'{"first":"मारकर बिल्लियों को कुत्ता सो गया"},'+
'{"first":"बिल्लियों को मारकर सो गया कुत्ता"},'+
'{"first":"मारकर बिल्लियों को सो गया कुत्ता"},'+
'{"first":"कुत्ता सो गया बिल्लियों को मारकर"},'+
'{"first":"कुत्ता सो गया मारकर बिल्लियों को"},'+
'{"first":"सो गया कुत्ता मारकर बिल्लियों को"},'+
'{"first":"सो गया कुत्ता बिल्लियों को मारकर"},'+

'{"first":"एक लाल किताब वहाँ है"},'+
'{"first":"एक लाल किताब है वहाँ"},'+
'{"first":"वहाँ है एक लाल किताब"},'+
'{"first":"है वहाँ एक लाल किताब"},'+

'{"first":"एक बड़ी सी किताब वहाँ है"},'+
'{"first":"एक बड़ी सी किताब है वहाँ"},'+
'{"first":"बड़ी सी एक किताब वहाँ है"},'+
'{"first":"बड़ी सी एक किताब है वहाँ"},'+
'{"first":"वहाँ है एक बड़ी सी किताब"},'+
'{"first":"वहाँ है बड़ी सी एक किताब"},'+
'{"first":"है वहाँ एक बड़ी सी किताब"},'+
'{"first":"है वहाँ बड़ी सी एक किताब"}]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =obj.sentence.first + " " ;