// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.
let counter = 1;
console.log(counter++ + " chi savol");
function plus(a, b) {
  return a + b;
}
console.log(plus(5, 8));

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.
console.log(counter++ + " chi savol");
function toSekund(mins) {
  return Math.floor(mins / 60);
}
console.log(toSekund(365));

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.
console.log(counter++ + " chi savol");
function nextNumber(num) {
  return num + 1;
}
console.log(nextNumber(10));

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin.
// Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2
console.log(counter++ + " chi savol");
function areaOfTriagle(base, height) {
  return (base * height) / 2;
}
console.log(areaOfTriagle(10, 15));

// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.
console.log(counter++ + " chi savol");
function ageToDays(age) {
  return age * 365;
}
console.log(21);

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.
// kub(3) --> 27
console.log(counter++ + " chi savol");
function numberCub(num) {
  return num ** 3;
}
console.log(5);

// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.
console.log(counter++ + " chi savol");
let arr = [1, 5, 9, 6];
function firstElement(arr) {
  return arr[0];
}
console.log(firstElement(arr));

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin
console.log(counter++ + " chi savol");
function power(x, y) {
  return x * y;
}
console.log(power(10, 5));

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.
console.log(counter++ + " chi savol");
function toSekunds(hour) {
  return hour * 3600;
}
console.log(toSekund(24));

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang
console.log(counter++ + " chi savol");
function longestSide(a, b) {
  return a + b - 1;
}
console.log(longestSide(3, 4));

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni
// birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.
console.log(counter++ + " chi savol");
function remainder(num1, num2) {
  return num1 % num2;
}
console.log(remainder(10, 3));

// 12.Turtburchakning bo'yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang.
console.log(counter++ + " chi savol");
function areaOfRectangle(height, width) {
  return height * width;
}
console.log(areaOfRectangle(3, 4));

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.
console.log(counter++ + " chi savol");
function joinString(str) {
  return "Something" + " " + str;
}
console.log(
  joinString(
    "Is Important Enough Even If The Odds Are Stacked Against You You Should Still Do It"
  )
);

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) --> 25
console.log(counter++ + " chi savol");
function square(num) {
  return num ** 2;
}
console.log(square(9));

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on
console.log(counter++ + " chi savol");
function isNotPositive(num) {
  if (num <= 0) {
    return true;
  }
  return false;
}
console.log(isNotPositive(5));

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180
console.log(counter++ + " chi savol");
function calculateInteriorAngle(numAngles) {
  return (numAngles - 2) * 180;
}
console.log(5);

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.
console.log(counter++ + " chi savol");
function totalPoints(twoPoint, threePoint) {
  return twoPoint * 2 + threePoint * 3;
}
console.log(5, 9);

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") --> "MubashirEdabit"
// nameString("Matt") --> "MattEdabit"
console.log(counter++ + " chi savol");
function joinEdabit(str) {
  return str + "Edabit";
}
console.log(joinEdabit("salom"));

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.
console.log(counter++ + " chi savol");
function isSumSmallerAHundred(a, b) {
  if (a + b < 100) {
    return true;
  }
  return false;
}
console.log(isSumSmallerAHundred(55, 75));

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) --> [1]
// printArray(3) --> [1, 2, 3]
// printArray(6) --> [1, 2, 3, 4, 5, 6]
console.log(counter++ + " chi savol");
function printArray(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi
console.log(counter++ + " chi savol");
function fermadaHayvonlarOyoqlari(tovuq, qoy, sigir) {
  return 2 * tovuq + 4 * qoy + 4 * sigir;
}
console.log(
  "Jami fermadagi hayvonlar oyoqlari: " + fermadaHayvonlarOyoqlari(10, 5, 7)
);

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false) --> false
// and(true, true) --> true
// and(false, true) --> false
// and(false, false) --> false
console.log(counter++ + " chi savol");
function isTrueTrue(bool1, bool2) {
  if (bool1 == true && bool2 == true) {
    return true;
  }
  return false;
}
console.log(isTrueTrue(true, true));
console.log(isTrueTrue(false, true));
console.log(isTrueTrue(true, false));
console.log(isTrueTrue(false, false));

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.
console.log(counter++ + " chi savol");
function isEqual(x, y) {
  if (x == y) {
    return "teng";
  }
  return "teng emas";
}
console.log(5, 7);

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.
console.log(counter++ + " chi savol");
function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
  return "Achkolar " + (yutishlar * 3 + duranglar);
}
console.log(futbolOchko(10, 5, 9));

// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.
console.log(counter++ + " chi savol");
function sekundlar(soat, minut) {
  return soat * 3600 + minut * 60;
}
console.log(sekundlar(24, 6));

// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) --> false
// fun(9) --> false
console.log(counter++ + " chi savol");
function tubmi(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(tubmi(5));

// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.
console.log(counter++ + " chi savol");
function tengMi(x, y) {
  if (x == y) {
    return true;
  }
  return false;
}
console.log(0, "0");

// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin.
console.log(counter++ + " chi savol");
function booleanToString(bool) {
  if (bool == true) {
    return "true";
  }
  return "false";
}
console.log(booleanToString(true));

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.
console.log(counter++ + " chi savol");
function arrowFunc(params) {
  return params;
}
console.log(arrowFunc(true));

// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.
console.log(counter++ + " chi savol");
function frameSoni(minut, frame) {
  return frame * 60 * minut;
}
console.log(frameSoni(3, 80));

alert("I'm devoloper");

let i = 31;
// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi.
// Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.
console.log(i++ + "masala");
function executeMathExpression(expression) {
  return eval(expression);
}
console.log(executeMathExpression("10-8*9"));

// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on
console.log(i++ + "masala");
function equal10(x, y) {
  if (x + y == 10 || x == 10 || y == 10) {
    return true;
  }
  return false;
}

// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa,
// ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.
console.log(i++ + "masala");
function fuel(distance) {
  if (distance < 10) {
    return 100;
  }
  return distance * 10;
}
console.log(fuel(11));

// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3, 7) --> 7
// fun(-1, 0) --> 0
// fun(1000, 400) --> 1000
console.log(i++ + "masala");
function foundMax(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

// 35.Funksiya 2ta argument berilsa,
// funksiya anashu 2ta argumentdan iborat massiv qaytarsin.
console.log(i++ + "masala");
function toArr(x, y) {
  let arr = [x, y];
  return arr;
}
console.log(toArr(1, 2));

// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi
// ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir
// birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold
// yolg’on.
console.log(i++ + "masala");
function isEqual(str1, str2) {
  if (str1.lenght == str2.lenght) {
    return true;
  }
  return false;
}
console.log(isEqual("sasasa", "dsdsds"));

// 37.Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
// aks holda false
console.log(i++ + "masala");
function isEmpty(str) {
  if (str == "") {
    return true;
  }
  return false;
}

// 38.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
// qaytarsin, aks holda false.
console.log(i++ + "masala");
function isDivisiblefive(num) {
  if (num % 5 == 0) {
    return true;
  }
  return false;
}

// 39.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
// qaytarsin, aks holda false.
console.log(i++ + "masala");
function isDivisiblefive(num) {
  if (num / 100 >= 1 && num % 100 == 0) {
    return true;
  }
  return false;
}

// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida
// nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.
console.log(i++ + "masala");
function countCharacters(str) {
  if (str === "") {
    return 0;
  } else {
    console.log(str.slice(1));
    // shu yerda rekursiya hosil bo'lmoqda 1+1+1...
    return 1 + countCharacters(str.slice(1));
    /*JavaScript-da slice() usuli satrning bir qismini ajratib olish uchun ishlatiladi
     va asl satrni o'zgartirmasdan yangi satrni qaytaradi.
     slice() usuli ikkita parametrni oladi: 
     boshlang'ich indeks (shu jumladan) 
     va yakuniy indeks (eksklyuziv).*/
  }
}
console.log(countCharacters("Hello"));

// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false
console.log(i++ + "masala");
function isdivise_x__y(x, y) {
  if (x % y == 0) {
    return true;
  }
  return false;
}

// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.
console.log(i++ + "masala");
function toNumber(str) {
  return +str;
}
console.log(toNumber(5));

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.
console.log(i++ + "masala");
function rectangleArea(length, width) {
  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    return -1;
  } else {
    return length * width;
  }
}
console.log(rectangleArea(4, 5)); // Output: 20
console.log(rectangleArea(0, 5)); //Output: -1 chunki to'rtburchak tomoni 0 bo'lishi mumkin emas
console.log(rectangleArea("4", 5)); //Output: -1 chunki to'rtburchak tomoni dtringda bo'lishi mumkin emas

// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin.
console.log(i++ + "masala");
function joinNameLastname(name, lastname) {
  return `${lastname},${name}`;
}
console.log(joinNameLastname("Muhammadqodir", "Baxtiyorov"));

// 45.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// bug(true)  ==> "sad days"
// bug(false)  ==> "it's a good day"
console.log(i++ + "masala");
function bug(isBug) {
  return isBug ? "sad days" : "it's a good day";
}
console.log(bug(true)); // Output: "sad days"
console.log(bug(false)); // Output: "it's a good day"

// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib
// qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin
console.log(i++ + "masala");
function deleteArrayElement(arr, elementIndex) {
  // delete arr[elementIndex];
  arr.splice(elementIndex, 1);
  return arr;
}
let arr = [5, 8, 9, 7, 1];
console.log(deleteArrayElement(arr, 1));

// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.
console.log(i++ + "masala");
function totalVotes(votesObj) {
  return votesObj.upvotes - votesObj.downvotes;
}
let votes = {
  upvotes: 35,
  downvotes: 25,
};
console.log(totalVotes(votes));

// 8.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.
console.log(i++ + "masala");
function toNegative(num) {
  return -1 * num;
}
console.log(toNegative(5));

// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang. Reverse metodi siz ham urinib ko’ring.
console.log(i++ + "masala");
function swapArrayElements(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    //sikl 1-marta aylanganda arr[0]- elementimizni vaqtinchalik o'zgaruvchiga tayinlab qo'yamiz
    let temp = arr[i];
    //arr[0]-elementimizni qiymatini arr[5-1-0]-->4-elementimiz qiymatiga tenglayapmiz
    arr[i] = arr[arr.length - 1 - i];
    //endi esa arr[4]-elemntimizni temp degan vaqtinchalik o'zgaruvchimizga tenglab qo'yamiz bu qiymat asl massivimizni 0 elementiga teng edi
    arr[arr.length - 1 - i] = temp;
    // shunday qilib massivimizni 0 elementi bilan ohirgi elementini qiymatini almashtirib oldik
    // 2-sikl aylanganda esa 1 elementi bilan ohiridan bitta oldingi elementini almashtiramiz
  }
  return arr;
}
let swappedArray = swapArrayElements(myArray);
console.log("Swapped array: " + swappedArray); // [5, 4, 3, 2, 1]

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.
console.log(i++ + "masala");
function allowedEnterCinema(age, isWithParents) {
  if (age >= 15 && isWithParents) {
    return true;
  }
  return false;
}
console.log(allowedEnterCinema(16, true));
