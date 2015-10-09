var book1 = new Object();
book1.title = "Ömersliv";
book1.author = "Ömer";
book1.price = 200;

var book2 = new Object();
book2.title = "Bobsliv";
book2.author = "Bobs";
book2.price = 200;

var fivepercencupon = new Object();
fivepercencupon.trueorfalse = true;


while (fivepercencupon.trueorfalse){
    do book1.price = book2.price/5;
    do book2.price = book2.price/5;
}

