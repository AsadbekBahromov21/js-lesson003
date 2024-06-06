const navbar = document.querySelector(".block__collection")

function toggleShow (){
    navbar.classList.toggle("show")
}






// {
//     // 1 masala
//     alert("butun son kiritganda u musbat bolsa 1 ga oshirilsin akis xolda ozgarmasdan ekrang achiqsin")
//     let a = prompt("butun son kiriting")
//     if(a > 0 ){
//         a++
//         alert(a)
//     }else{
//         alert(a)
//     }
// }


// {
//     // 2 masala
//     alert("butun son kiriting u musbat bolsa 1 ga oshirilsin manfiy bolsa 2 ga kamaytirilsin")
//     let a = +prompt("son kiriting")
//     if(a>0){
//         a++
//         alert(a)
//     }else{
//         a -= 2
//         alert(a)
//     }
// }

// {
//     // 3 masala
//     alert("butun son kiriting u musbat bolsa 1 ga oshirilsin agar manfiy bolsa 2 kamaytirilsin akis xolda 0 bolsa 10 ozlashtirilsin")
//     let a = +prompt("son kiriting")
//     if(a > 0 ){
//         a++
//     alert(a)
//     }else if(a < 0){
//         a -=2
//         alert(a)

//     }else if (a == 0) {
//         a += 10
//         alert(a)
//     }
// }

// {
//     // 4 masala
//     alert("3 ta son berilgan musbat sonni aniq lovchi programma tuzing")
//     let a = +prompt("son kiriting")
//     let b = +prompt("son kiriting")
//     let c = +prompt("son kiriting")
//     let musbat = 0

//     if( a > 0){
//         musbat++
//     }
//     if( b > 0){
//         musbat++
//     }
//     if( c > 0){
//         musbat++
//     }
//     alert(`${musbat} ta musbat son bor`)
// }

// {
//     // 5 masala
//     alert("3 ta butun son berilgan musbat va manfiy son borligini aniqlovchi programma tuzilsin")
//     let a = +prompt("son kiriting")
//     let b = +prompt("son kiriting")
//     let c = +prompt("son kiriting")
//     let musbat = 0
//     let manfiy = 0
//     if(a > 0){
//         musbat++
//     }else{
//         manfiy++
//     } 
//     if(b > 0){
//         musbat++
//     }else{
//         manfiy++
//     }
//     if(c > 0){
//         musbat++
//     }else{
//         manfiy++
//     }
//     alert(`${musbat} ta musbat son bor ${manfiy} ta manfiy son bor`)
// }

// {
//     // 6 masala
//     alert ("2 ta butun son berilgan shuni katasini aniqlovchi programma tuzilsin")
//     let a = +prompt("son kiriting")
//     let b = +prompt("son kiriting")
//     if(a > b){
//         alert(a)
//     }else{
//         alert(b)
//     }
// }

// {
//     // 7 masala
//     alert("2 ta son berilgan ularning kichigini tartib raqamini qaytaradigan programma tuzing")
//     let a = +prompt("son kiriting")
//     let b = +prompt("son kiriting")
//     if(a < b){
//         alert(`bunda 1 son kichik ${a}`)
//     }else{
//         alert(`bunda 2 son katta ${b}`)
//     }
// }

// {
//     // 8 masala
//     alert("2 ta butun son berilgan aval kattasini kiyin kichigini chiqaruvchi programma tuzilsin")
//     let a = +prompt("son kiriting")
//     let b = +prompt("son kiriting")
//     if( a > b){
//         alert(`bunda a soni katta ${a}`)
//     }else{
//         alert(`bunda b soni katta ${b}`)
//     }
// }


// {
//     // 9 masala
//     alert("A va B sonlar berilganularni shunday orgartiring A va B ni qiymati ekranga chiqsin  ")
//     let a = +prompt("son kiriting")
//     let b = +prompt("son kiriting")
//     if(a < b){
//         alert(` ${a} soni kichik  ${b} soni katta `)
//     }

// }


// {
//     // 10 masala
//     alert("A  va B butun sonlar berilgan agar ozgaruvchi ozaro teng bolmasa  A va B ozgaruvchilari yigindisi ozlashtirilsin agar teng bolsa 0 ni ozlashtirsin")
//     let a = +prompt("son kiriting")
//     let b = +prompt("son kiriting")
//     if( a != b){
//         let sum = a + b
//          alert(`a soni = ${a} va b soni ${b}
//          shular yigindisi ${sum} ga teng`)
//     }else{
//         alert(`javob ${0}`)
//     }
// }


// {
//     // 11 masala
//     alert("A va B son berilgan agar ozgaruvchilar ozgaro teng bolmasa   A va B ozgaruvchi yigindisini ozlashtirsin akis xolda 0 ga ozlashtirsin")
//     let a = +prompt("son kiriting")
//     let b = +prompt("son kiriting")
//     let c = 0
//     if(a == b){
//         alert(`a soni ${a} b soni ${b} javob ${s}`)
//     }else if(a >b){
//         alert(`a soni katta `)
//     }else{
//         alert(`b soni katta`)
//     }
// }